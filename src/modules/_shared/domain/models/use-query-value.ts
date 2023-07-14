export default interface UseQueryValue<T = any> {
    data?: T;
    total?: number;
    error?: any;
    isIdle: boolean;
    loading: boolean;
    loaded: boolean;
    refetch: any;
    isFetching: boolean,
    isRefetching: boolean,
}
