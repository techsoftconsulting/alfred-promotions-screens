import {QueryCacheReader} from "@modules/_shared/domain/services/query-cache-reader";
import Query from "@modules/_shared/domain/models/query";
import {QueryClient} from "react-query";

export class ReactQueryCacheReader implements QueryCacheReader {

    constructor(private queryClient: QueryClient) {

    }

    getQueryData(query: Query): any {
        // const data = this.queryClient.getQueryData(query.id)
    }

    getListData(resourceName: string): any {
        const myQuery: Query = {
            id: resourceName,
            payload: {},
            type: "list",
        }


        const data = this.queryClient.getQueriesData({
            predicate: query => {
                const queryKey: any = query.queryKey[0]
                return queryKey.id === myQuery.id && queryKey.type === myQuery.type
            }
        })

        if (data.length == 0) return []

        const foundData = data[0][1]

        if (!foundData) return []

        const result = foundData.ids.map((id) => {
            return foundData.data[id]
        })

        if (result.length > 0) {
            //     console.log(`${resourceName} cachaeado, no request!!`)
        }

        return result
    }

    getSingleData(resourceName: string, id: string): any {

        const myQuery: Query = {
            id: resourceName,
            payload: {
                id: id
            },
            type: "get",
        }

        const data = this.queryClient.getQueriesData({
            predicate: query => {
                const queryKey: any = query.queryKey[0]
                return queryKey.id === myQuery.id && queryKey.type === myQuery.type
            }
        })

        if (data.length == 0) return undefined

        const cand = data.find((re) => !!re[1])

        if (!cand) return undefined

        const result = cand[1].data

        if (!!result) {
            //     console.log(`${resourceName} cachaeado, no request!!`)
        }

        return result
    }


}