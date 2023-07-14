import { Box } from '@main-components/Base/Box';
import { Icon } from '@main-components/Base/Icon';
import Text from '@main-components/Typography/Text';

export default function InDevelopment() {
    return (
            <Box
                    bg='white'
                    flex={1}
                    alignItems={'center'}
                    justifyContent={'center'}
            >
                <Icon
                        name={'code'}
                        type={'ionicon'}
                        numberSize={100}
                        color={'greyMain'}
                />
                <Box mt={'m'}>
                    <Text
                            color={'greyMain'}
                            variant={'heading2'}
                    >En desarrollo.. 😃</Text>
                </Box>
            </Box>
    );
}