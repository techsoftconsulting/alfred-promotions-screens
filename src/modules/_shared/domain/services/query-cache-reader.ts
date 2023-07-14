import Query from "@modules/_shared/domain/models/query";

export interface QueryCacheReader {
    getQueryData(query: Query): any;

    getListData<T = any>(resourceName: string): T[];

    getSingleData<T = any>(resourceName: string, id: string): T | undefined;
}