import { useNavigation as useExpoRouterNavigation, useRouter } from 'expo-router';

export default function useNavigation() {
    const { navigate, setOptions, getParent, goBack, canGoBack, reset } =
        useExpoRouterNavigation();

    const router = useRouter();

    return {
        navigate(routeName: string, params?: object | undefined) {
            const r = /*routeName == '/' ? '(authenticated)/(home)'*/ routeName;

            router.push({
                pathname: r,
                params
            });
            //navigate(routeName, params);
        },
        setOptions(options: Partial<{}>) {
            //setOptions(options);
        },
        goBack() {
            router.back();
            // goBack();
        },
        canGoBack() {
            return canGoBack();
            // return canGoBack();
        },
        replace(routeName: string, params?: object | undefined) {
            router.replace({ pathname: routeName, params });
        },
        reset(state: any) {
            reset(state);
        }
    };
}