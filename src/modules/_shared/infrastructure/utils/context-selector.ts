import {
    createContext as scsCreateContext,
    useContextSelector as scsContextSelector
} from 'use-context-selector';

export default function createContext<T = any>(initialData: any) {
    return scsCreateContext<T>(initialData);
}

export function useContextSelector<T = any, K = any>(
    context: any,
    selector: (s: T) => K
) {
    return scsContextSelector(context, selector);
}
