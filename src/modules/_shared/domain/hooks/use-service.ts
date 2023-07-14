import useServiceProvider from "./use-service-provider";

export default function useService<T>(serviceName: string) {
    const service = useServiceProvider((services) => services[serviceName]);

    if (!service) {
        throw new Error(`${serviceName} is not injected in App provider`);
    }

    return service as T
}
