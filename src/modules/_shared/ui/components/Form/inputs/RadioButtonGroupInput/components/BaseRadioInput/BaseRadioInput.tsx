import { RadioButton as BaseRadioButton } from 'react-native-paper';
import { BaseRadioInputProps } from './BaseRadioInputProps';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import { Box } from '@main-components/Base';
import { useTheme } from '@shared/ui/theme/AppTheme';

export default function BaseRadioInput({
    title,
    value,
    choice,
    disabled,
    renderChoiceText,
    ...props
}: BaseRadioInputProps) {
    const theme = useTheme();
    const isChecked = props.checked;

    const onCheck = () => {
        props.onChange &&
        props.onChange(!isChecked === true ? true : undefined);
    };

    const Title = () => {
        return typeof title == 'string' ? (
            <Text variant='body1'>{title}</Text>
        ) : (
            title
        );
    };

    function renderDefaultChoiceText() {
        if (disabled) {
            return (
                <Box>
                    <Title />
                </Box>
            );
        }

        return (
            <TouchableOpacity onPress={onCheck}>
                <Title />
            </TouchableOpacity>
        );
    }

    return (
        <Box
            mb={'m'}
        >
            <Box
                flexDirection='row'
                alignItems='center'
            >
                <Box mr={'s'}>
                    <BaseRadioButton.Android
                        value={value}
                        onPress={onCheck}
                        color={theme.colors[props.color]}
                        uncheckedColor={theme.colors[props.uncheckedColor]}
                        status={props.checked ? 'checked' : 'unchecked'}
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
                        disabled={disabled}
                    />
                </Box>
                <Box flex={1}>
                    {
                        renderChoiceText ? renderChoiceText({ choice, onCheck }) : renderDefaultChoiceText()
                    }
                </Box>
            </Box>
        </Box>
    );
}
