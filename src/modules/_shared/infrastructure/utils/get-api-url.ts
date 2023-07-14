import { ENV } from '@shared/infrastructure/utils/get-envs';

export default function getApiUrl(path: string) {
    return `${ENV.API_URL}/${path}`;
}
