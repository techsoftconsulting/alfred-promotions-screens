import parsePhone from '@shared/domain/utils/misc/phone-numbers';
import React, { useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import PhoneInput from './PhoneInput';
import images from '@shared/ui/images/images';
import { useTheme } from '@shared/ui/theme/AppTheme';
import { BaseTextInputProps } from '@main-components/Form/inputs/TextInput/components/BaseTextInput/BaseTextInputProps';

export interface BasePhoneTextInputProps extends BaseTextInputProps {
}

export default function BasePhoneTextInput({
    dense = true,
    showUnderline = true,
    ...props
}: BasePhoneTextInputProps) {
    const phoneInput = useRef<any>(null);
    const theme = useTheme();
    const leftCompWidth = props.left?.width ? props.left?.width : 0;
    const leftBoxWidth =
            props.leftIcon?.size == 'm'
                    ? 25
                    : props.leftIcon?.size
                            ? theme.iconSizes[props.leftIcon?.size]
                            : 25;

    const [initialParts, setInitialParts] = useState(
            getPhoneParts(props.defaultValue ?? props.value)
    );

    function getPhoneParts(phone) {
        const defaultCurrentPhone = parsePhone(phone ?? '');
        const defaultNumber: any = defaultCurrentPhone.number ?? '';
        const defaultCountry: any = defaultCurrentPhone.country ?? 'MX';
        return {
            number: defaultNumber,
            country: defaultCountry,
            code: defaultCurrentPhone.countryCallingCode ?? '52'
        };
    }

    useEffect(() => {
        setInitialParts(getPhoneParts(props.value));
    }, [props.value]);

    return (

            <PhoneInput
                    ref={phoneInput}
                    {...props}
                    defaultValue={initialParts.number}
                    defaultCode={initialParts.code}
                    defaultCountry={initialParts.country}
                    layout='first'
                    containerStyle={{
                        elevation: 0,
                        paddingLeft: props.leftIcon
                                ? leftCompWidth + leftBoxWidth + 5
                                : undefined,
                        backgroundColor: 'transparent',
                        fontFamily: theme.textVariants.body.fontFamily,
                        ...props.style,
                        height: dense ? 40 : 60
                    }}
                    countryPickerButtonStyle={{
                        ...Platform.select({
                            web: {
                                width: 60
                            }
                        })
                    }}
                    textInputStyle={{
                        height: dense ? 40 : 60,
                        ...Platform.select({
                            web: {
                                outline: 'none',
                                paddingLeft: 10
                            }
                        })
                    }}
                    textContainerStyle={{
                        backgroundColor: 'transparent',
                        bottom: Platform.OS == 'android' ? 0 : 0,
                        height: 30,
                        maxHeight: 30,
                        alignSelf: 'center',
                        ...(props.mode == 'outlined' && {
                            marginTop: 1,
                            marginRight: 1
                        }),
                        ...Platform.select({
                            web: {
                                padding: 0,
                                paddingLeft: 10
                            }
                        })
                    }}
                    codeTextStyle={{
                        ...Platform.select({
                            web: {
                                width: 50
                            }
                        })
                    }}
                    onChangeFormattedText={(text) => {
                        props.onChangeText && props.onChangeText(text);
                    }}
                    autoFocus={props.autoFocus}
                    countryPickerProps={{
                        translation: 'spa',
                        closeButtonImage: images.CLOSE,
                        theme: {
                            onBackgroundTextColor: theme.colors.greyMain,
                            fontSize: 16
                        },
                        filterProps: {
                            selectionColor: theme.colors.textColor,
                            placeholder: 'Escribe para filtrar por país...'
                        }
                    }}
            />
    );
}
