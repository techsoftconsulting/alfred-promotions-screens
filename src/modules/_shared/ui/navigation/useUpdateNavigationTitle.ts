import useNavigation from "@modules/_shared/domain/hooks/navigation/use-navigation";
import {useEffect} from "react";

export function useUpdateNavigationTitle(initialTitle?: string | undefined) {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            title: initialTitle
        })
    }, [initialTitle])

    return {
        update(title?: string | undefined) {
            navigation.setOptions({
                title: title
            })
        }
    }
}