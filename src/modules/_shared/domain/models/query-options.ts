export default interface QueryOptions {
    action?: string;
    onSuccess?: (response: any) => any | Object;
    onFailure?: (error?: any) => any | Object;
    withDeclarativeSideEffectsSupport?: boolean;
    keepPreviousData?: boolean;
    enabled?: boolean;
    cache?: boolean;
    queryGroups?: string[]; // used to invalidate a group of queries, this is a custom prop
    handleServiceError?: boolean;
}
