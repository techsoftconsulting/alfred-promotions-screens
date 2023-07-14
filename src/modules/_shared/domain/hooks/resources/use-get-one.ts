import Query from "../../models/query";
import QueryOptions from "../../models/query-options";
import UseQueryValue from "../../models/use-query-value";
import QueryCreator from "../../services/query-creator";
import useRepository from "../use-repository";
import useService from "../use-service";

type ResponseQueryValue<Model> = Omit<UseQueryValue, "data" | "total"> & {
    data?: Model;
};

export default function useGetOne<Model, Repository>(props: {
    resource: string;
    repository: string;
    id: string;
    fn: (repo: Repository, id: string) => Promise<Model | undefined>;
    options?: QueryOptions;
}) {
    const {resource, repository, fn, id, options} = props;

    const repo = useRepository<Repository>(repository);
    const queryCreator = useService<QueryCreator>("QueryCreator");

    const query: Query = {
        id: resource,
        payload: {
            id,
            ...(options?.queryGroups ? {queryGroups: options.queryGroups} : {})
        },
        type: "get",
    };

    const queryState: ResponseQueryValue<Model> = queryCreator.execute(
        query,
        () => fn(repo, id),
        {
            enabled: options ? options.enabled : true,
            ...(options ? options : {})
        }
    );

    return {...queryState};
}
