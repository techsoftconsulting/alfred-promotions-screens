import { useUtils } from '@modules/_shared/domain/hooks/use-utils';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { Platform } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';
import { BaseRichTextInputProps } from './BaseRichTextInputProps';

export default function BaseRichTextInput({
    borderColor = 'secondaryMain',
    backgroundColor = 'secondaryLight',
    mode = 'outlined',
    dense = true,
    keyboardType,
    ...props
}: BaseRichTextInputProps) {
    const theme = useTheme();
    const utils = useUtils();
    const leftCompWidth = props.left?.width ? props.left?.width : 0;

    const height = Platform.OS === 'ios' ? props.numberOfLines ? props.numberOfLines * 20 : undefined : undefined;

    return (

        <PaperInput
            {...utils.object.omit(props, ['ref'])}
            multiline
            value={props.value}
            render={props.render}
            disabled={props.disabled}
            error={!!props.error}
            pointerEvents={props.pointerEvents}
            label={undefined}
            selectionColor={theme.colors.textInputColor}
            mode='outlined'
            underlineColor={'transparent'}
            dense={dense}
            outlineColor='transparent'
            style={{
                elevation: 0,
                border: 0,
                paddingLeft: props.leftIcon
                    ? leftCompWidth + 30
                    : undefined,
                marginTop: -8,
                backgroundColor: 'transparent',
                ...Platform.select({
                    web: {
                        outline: 'none'
                    }
                }),
                ...props.style,
                minHeight: height
            }}
            theme={{
                colors: {
                    placeholder: theme.colors.inputPlaceholderColor,
                    text: theme.colors.textInputColor,
                    error: theme.colors.dangerMain,
                    primary: 'transparent'
                }
            }}
            keyboardType={keyboardType}
        />
    );
}
