import {useContextSelector} from "@modules/_shared/infrastructure/utils/context-selector";
import LayoutContext from "@modules/_shared/ui/contexts/layout-context";

export function useAppLayout(selector: (v: any) => any) {
    return useContextSelector(LayoutContext, selector)
}