import { useNavigation } from '@react-navigation/native';
import ServiceError from '../models/service-error';
import useNotify from './use-notify';

export default function useHandleServiceError({
    active
}: {
    active?: boolean;
}) {
    const notify = useNotify();
    const { navigate, reset } = active
        ? useNavigation()
        : (() => {
            return {
                navigate: (params: any) => {
                },
                reset: (params: any) => {
                }
            };
        })();

    return {
        handle: (error: ServiceError) => {
            if (error.message.indexOf('UNAUTHORIZED') > -1) {
                notify('Your session has expired', 'warning');
                return;
            }

            if (error.message.indexOf('NO_INTERNET_CONNECTION') > -1) {
                notify('NetworkError', 'screen');
                return;
            }

            if (error.message.indexOf('NETWORK_FAILED') > -1) {
                notify('NetworkError', 'screen');
                return;
            }

            if (error.message.indexOf('NOT_FOUND') > -1) {
                reset({
                    routes: [
                        {
                            name: 'NotFound',
                            params: {
                                title: 'Recurso no encontrado',
                                description:
                                    'El recurso que intentas acceder no está disponible. ' +
                                    ''
                            }
                        }
                    ]
                });

                return;
            }

            throw error;
        }
    };
}
