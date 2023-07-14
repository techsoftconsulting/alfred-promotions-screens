import {stringify} from 'query-string';
import HttpError from './HttpError';

export interface Options extends RequestInit {
    token?: string;
}

export const createHeadersFromOptions = (options: Options): Headers => {
    const requestHeaders = (options.headers ||
        new Headers({
            Accept: 'application/json'
        })) as Headers;
    if (
        !requestHeaders.has('Content-Type') &&
        !(options && (!options.method || options.method === 'GET')) &&
        !(options && options.body && options.body instanceof FormData)
    ) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    if (options.token) {
        requestHeaders.set('Authorization', 'Bearer ' + options.token);
    }

    return requestHeaders;
};

export const fetchJson = (url: string, options: Options = {}) => {
    const requestHeaders = createHeadersFromOptions(options);

    return fetch(url, {...options, headers: requestHeaders})
    .then(async (response) => {
            return response.json().then((text) => ({
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                body: text
            }))
        }
    )
    .then(({status, statusText, headers, body}) => {


        if (status < 200 || status >= 300) {
            if (status === 401) {
                throw new Error('UNAUTHORIZED');
            }

            return Promise.reject(
                new HttpError(
                    body ? body.error?.toUpperCase() : statusText,
                    status.toString(),
                    body
                )
            );
        }
        return Promise.resolve({
            status,
            headers,
            body: body,
            rawBody: body,
            json: body
        });
    })
};

export const queryParameters = stringify;

const isValidObject = (value: any) => {
    if (!value) {
        return false;
    }

    const isArray = Array.isArray(value);
    const isBuffer = typeof Buffer !== 'undefined' && Buffer.isBuffer(value);
    const isObject =
        Object.prototype.toString.call(value) === '[object Object]';
    const hasKeys = !!Object.keys(value).length;

    return !isArray && !isBuffer && isObject && hasKeys;
};

export const flattenObject = (value: any, path: any[] = []) => {
    if (isValidObject(value)) {
        return Object.assign(
            {},
            ...Object.keys(value).map((key) =>
                flattenObject(value[key], path.concat([key]))
            )
        );
    } else {
        return path.length ? {[path.join('.')]: value} : value;
    }
};
