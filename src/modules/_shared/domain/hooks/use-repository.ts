import useDataProvider from "./use-data-provider";

export default function useRepository<T>(repoName: string) {
    const repository = useDataProvider((repos) => repos[repoName]);

    if (!repository) {
        throw new Error(`${repoName} is not injected in App provider`);
    }

    return repository as T
}
