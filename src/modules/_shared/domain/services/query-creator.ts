import Query from "../models/query";
import QueryOptions from "../models/query-options";
import UseQueryValue from "../models/use-query-value";

export default interface QueryCreator {
  execute(query: Query, queryFn: any, options: QueryOptions): UseQueryValue;
}
