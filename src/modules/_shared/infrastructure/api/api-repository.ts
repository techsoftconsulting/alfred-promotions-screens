import PaginationOptions from '@modules/_shared/domain/models/pagination-options';
import SortOptions from '@modules/_shared/domain/models/sort-options';
import { fetchJson } from '../http/fetch';
import getApiUrl from '../utils/get-api-url';
import { setLimitAndOffset, setOrder, setWhere } from '../utils/set-loopback-query-params';
import { QueryCacheReader } from '@modules/_shared/domain/services/query-cache-reader';

export interface APIRepositoryProps {
    tokenId: string;
    queryCacheReader: QueryCacheReader;
}

export default abstract class APIRepository {
    constructor(private props: APIRepositoryProps) {

    }

    protected get tokenId() {
        return this.props.tokenId;
    }

    protected get queryCacheReader() {
        return this.props.queryCacheReader;
    }

    public async findByCriteriaRequest<T>(
        resource: string,
        filter: any = {},
        pagination?: PaginationOptions,
        sort?: SortOptions,
        withAuth?: boolean
    ) {
        let url = new URL(getApiUrl(`${resource}`));

        setWhere(url, filter);

        setLimitAndOffset(url, pagination);

        setOrder(url, sort);

        const response = await fetchJson(url.toString(), {
            method: 'GET',
            token: withAuth ? this.tokenId : undefined
        });

        const { json } = response;

        const items: T[] = ((json ? json : []) as any[]).map(
            (e) => {
                return {
                    ...e
                };
            }
        );

        return items;
    }

    public async countRequest<T>(
        resource: string,
        where: any = {},
        withAuth?: boolean
    ) {
        let url = new URL(getApiUrl(`${resource}/count`));

        const path = url.pathname.split('/');

        if (where && Object.keys(where).length > 0)
            setWhere(url, where, 'where');

        url.pathname = path.filter(Boolean).join('/');

        const response = await fetchJson(url.toString(), {
            method: 'GET',
            token: withAuth ? this.tokenId : undefined
        });

        const { json } = response;

        return json;
    }

    public async findOneById<T>(
        resource: string,
        id: string,
        withAuth?: boolean
    ) {
        if (!id) {
            return undefined;
        }

        let url = new URL(getApiUrl(`${resource}/${id}`));

        const response = await fetchJson(url.toString(), {
            method: 'GET',
            token: withAuth ? this.tokenId : undefined
        });

        const { json } = response;

        /* if (!json) {
             throw new Error('Element not found');
         }*/

        return json as T;
    }

    public async create<T>(resource: string, data: any, withAuth?: boolean) {
        let url = new URL(getApiUrl(`${resource}`));

        const response = await fetchJson(url.toString(), {
            method: 'POST',
            body: JSON.stringify(data),
            token: withAuth ? this.tokenId : undefined
        });

        return response.json;
    }

    public async updateById<T>(
        resource: string,
        id: string,
        changes: any,
        withAuth?: boolean
    ) {
        if (!id) {
            throw new Error('Id not received');
        }
        let url = new URL(getApiUrl(`${resource}/${id}`));

        const response = await fetchJson(url.toString(), {
            method: 'PATCH',
            body: JSON.stringify(changes),
            token: withAuth ? this.tokenId : undefined
        });

        return response.json;
    }

    public async deleteById<T>(
        resource: string,
        id: string,
        withAuth?: boolean
    ) {
        if (!id) {
            throw new Error('Id not received');
        }
        let url = new URL(getApiUrl(`${resource}/${id}`));

        await fetchJson(url.toString(), {
            method: 'DELETE',
            token: withAuth ? this.tokenId : undefined
        });
    }

    public async get<T>(
        path: string,
        withAuth?: boolean
    ) {

        let url = new URL(getApiUrl(`${path}`));

        const response = await fetchJson(url.toString(), {
            method: 'GET',
            token: withAuth ? this.tokenId : undefined
        });

        const { json } = response;

        return json as T;
    }

    public async post<T>(
        path: string,
        data: any,
        withAuth?: boolean
    ) {

        let url = new URL(getApiUrl(`${path}`));

        const response = await fetchJson(url.toString(), {
            method: 'POST',
            body: JSON.stringify(data),
            token: withAuth ? this.tokenId : undefined
        });

        return response.json;
    }

    public async patch<T>(
        resource: string,
        changes: any,
        withAuth?: boolean
    ) {

        let url = new URL(getApiUrl(`${resource}`));

        const response = await fetchJson(url.toString(), {
            method: 'PATCH',
            body: JSON.stringify(changes),
            token: withAuth ? this.tokenId : undefined
        });

        return response.json;
    }
}
