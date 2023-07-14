import {useEffect} from "react";

export function useResetMutationState({dependencies, reset}: { reset: any, dependencies: any[] }) {
    useEffect(() => {
        return () => {
            setTimeout(() => {
                reset();
            }, 1000);
        };
    }, dependencies);
}