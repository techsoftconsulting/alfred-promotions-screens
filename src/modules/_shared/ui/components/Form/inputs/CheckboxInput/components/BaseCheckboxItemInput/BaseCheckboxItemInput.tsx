import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { Checkbox as BaseCheckbox } from 'react-native-paper';
import { BaseCheckboxItemInputProps } from './BaseCheckboxItemInputProps';

export default function BaseCheckboxItemInput({
    title,
    checked,
    onChange,
    value,
    error,
    disabled,
    ...rest
}: BaseCheckboxItemInputProps) {
    const theme = useTheme();


    const isChecked = !!value;

    const onCheck = () => {
        onChange && onChange(!isChecked === true ? true : false);
    };

    const Title = () => {
        return typeof title == 'string' ? (
            <Text variant='body1'>{title}</Text>
        ) : (
            title
        );
    };
    return (
        <Box>
            <Box
                flexDirection='row'
                alignItems='center'
            >
                <Box width={40}>
                    <BaseCheckbox.Android
                        status={isChecked ? 'checked' : 'unchecked'}
                        theme={{
                            fonts: {
                                regular: {
                                    fontFamily:
                                    theme.textVariants.body.fontFamily
                                },
                                medium: {
                                    fontFamily:
                                    theme.textVariants.body.fontFamily
                                },
                                thin: {
                                    fontFamily:
                                    theme.textVariants.body.fontFamily
                                }
                            },
                            colors: {
                                placeholder: theme.colors.inputPlaceholderColor,
                                text: theme.colors.textInputColor,
                                error: theme.colors.dangerMain,
                                primary: theme.colors.primaryMain
                            }
                        }}
                        uncheckedColor={theme.colors.greyMain}
                        color={theme.colors.primaryMain}
                        onPress={!disabled ? onCheck : () => {
                        }}
                        disabled={disabled}
                    />
                </Box>
                <Box flex={1}>
                    {disabled ? (
                        <Box>
                            <Title />
                        </Box>
                    ) : (
                        <TouchableOpacity onPress={onCheck}>
                            <Title />
                        </TouchableOpacity>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
