import {useMemoOne} from "use-memo-one";

export function useGetFormDefaultValues(values, deps = []) {
    return useMemoOne(() => {
        return values
    }, deps)
}