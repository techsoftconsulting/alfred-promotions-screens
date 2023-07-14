import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import { Form } from '@main-components/Form/Form';
import RestaurantMallSelectInput from '@modules/promotions/ui/components/RestaurantMallSelectInput';
import { required } from '@shared/domain/form/validate';
import useSaveConfigurations from '@modules/promotions/application/config/use-save-configurations';
import useNotify from '@shared/domain/hooks/use-notify';
import useFindConfigurations from '@modules/promotions/application/config/use-find-configurations';
import useNavigation from '@shared/domain/hooks/navigation/use-navigation';
import SizingUtils from '@utils/misc/sizing-utils';

export default function ConfigRoute() {
    const { execute, loading: saving } = useSaveConfigurations();
    const notify = useNotify();
    const { data: config, loading } = useFindConfigurations();
    const { navigate } = useNavigation();

    return (
            <Box
                    bg={'greyLightest'}
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
            >
                <Text
                        align={'center'}
                        bold
                        variant={'heading2'}
                >Configuraciones</Text>

                <Box
                        mt={'m'}
                        bg={'white'}
                        borderRadius={SizingUtils.mscale(10)}
                        p={'xl'}
                        width={'100%'}
                        justifyContent={'center'}
                        maxWidth={SizingUtils.scale(200)}
                >


                    <Box mt={'m'}>

                        <Form
                                defaultValues={{
                                    ...config ?? {}
                                }}
                                onSubmit={async (values) => {
                                    await execute(values);
                                    notify('Guardado exitosamente', 'success');

                                    setTimeout(() => {
                                        navigate('/');
                                    }, 1000);
                                }}
                                saveButtonProps={{
                                    loading: saving,
                                    label: 'Guardar'
                                }}
                        >
                            <RestaurantMallSelectInput
                                    label={'Plaza'}
                                    required
                                    validate={required()}
                                    source={'mallId'}
                            />
                        </Form>
                    </Box>

                </Box>
            </Box>
    );
}