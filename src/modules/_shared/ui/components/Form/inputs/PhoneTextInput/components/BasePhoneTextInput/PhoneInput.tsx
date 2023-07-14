import { onlyNumbers } from '@shared/domain/form/filters';
import { PhoneNumberUtil } from 'google-libphonenumber';
import React, { forwardRef, useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker, {
    CountryModalProvider,
    DARK_THEME,
    DEFAULT_THEME,
    Flag
} from 'react-native-country-picker-modal';
import styles from './styles';
import { useTheme } from '@shared/ui/theme/AppTheme';
import { Box } from '@main-components/Base/Box';

const dropDown =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAi0lEQVRYR+3WuQ6AIBRE0eHL1T83FBqU5S1szdiY2NyTKcCAzU/Y3AcBXIALcIF0gRPAsehgugDEXnYQrUC88RIgfpuJ+MRrgFmILN4CjEYU4xJgFKIa1wB6Ec24FuBFiHELwIpQxa0ALUId9wAkhCnuBdQQ5ngP4I9wxXsBDyJ9m+8y/g9wAS7ABW4giBshQZji3AAAAABJRU5ErkJggg==';
const phoneUtil = PhoneNumberUtil.getInstance();

export function PhoneInput(props, ref) {
    const [code, setCode] = useState(props.defaultCode ?? '91');
    const [number, setNumber] = useState(
            props.value ?? props.defaultValue ?? ''
    );
    const [modalVisible, setModalVisible] = useState(false);
    /*   const [disabled, setDisabled] = useState(props.disabled ?? false);*/
    const [countryCode, setCountryCode] = useState(
            props.defaultCountry ?? 'IN'
    );

    const theme = useTheme();

    useEffect(() => {
        if (props.defaultCode !== code) {
            setCode(props.defaultCode);
        }

        if (props.defaultCountry !== countryCode) {
            setCountryCode(props.defaultCountry);
        }

        if (props.defaultValue !== number) {
            setNumber(props.defaultValue);
        }
    }, [props.defaultValue, props.defaultCountry, props.defaultCode]);

    function getCountryCode() {
        return countryCode;
    }

    function getCallingCode() {
        return code;
    }

    function isValidNumber(number) {
        try {
            const parsedNumber = phoneUtil.parse(number, countryCode);
            return phoneUtil.isValidNumber(parsedNumber);
        } catch (err) {
            return false;
        }
    }

    function onSelect(country) {
        const { onChangeCountry } = props;
        setCountryCode(country.cca2);
        setCode(country.callingCode[0]);

        const { onChangeFormattedText } = props;
        if (onChangeFormattedText) {
            if (country.callingCode[0]) {
                onChangeFormattedText(`+${country.callingCode[0]}${number}`);
            } else {
                onChangeFormattedText(number);
            }
        }
        if (onChangeCountry) {
            onChangeCountry(country);
        }
    }

    function onChangeText(textOri) {

        const prevText = onlyNumbers(textOri);
        const text = prevText ? parseInt(`${prevText}`, 10).toString() : prevText;

        setNumber(text);
        const { onChangeText, onChangeFormattedText } = props;

        if (onChangeText) {
            onChangeText(text);
        }

        if (onChangeFormattedText) {
            if (code) {
                onChangeFormattedText(
                        text.length > 0 ? `+${code}${text}` : text
                );
            } else {
                onChangeFormattedText(text);
            }
        }
    }

    function getNumberAfterPossiblyEliminatingZero() {
        let nextNumber = number;

        if (nextNumber.length > 0 && nextNumber.startsWith('0')) {
            nextNumber = number.substr(1);
            return {
                number: nextNumber,
                formattedNumber: code ? `+${code}${number}` : number
            };
        } else {
            return {
                number: nextNumber,
                formattedNumber: code ? `+${code}${number}` : number
            };
        }
    }

    function renderMyDropdownImage() {
        return (
                <Image
                        source={{ uri: dropDown }}
                        resizeMode='contain'
                        style={styles.dropDownImage}
                />
        );
    }

    function renderFlagButton(props) {
        const { layout = 'first', flagSize } = props;

        if (layout === 'first') {
            return (
                    <Flag
                            countryCode={countryCode}
                            flagSize={flagSize ? flagSize : 20}
                    />
            );
        }
        return <View />;
    }

    const {
        withShadow,
        withDarkTheme,
        codeTextStyle,
        textInputProps,
        textInputStyle,
        autoFocus,
        placeholder,
        disableArrowIcon,
        flagButtonStyle,
        containerStyle,
        textContainerStyle,
        renderDropdownImage,
        countryPickerProps = {},
        filterProps = {},
        countryPickerButtonStyle,
        layout = 'first',
        disabled
    } = props;

    return (
            <CountryModalProvider>
                <View
                        style={[
                            styles.container,
                            withShadow ? styles.shadow : {},
                            containerStyle ? containerStyle : {},
                            {

                                width: '100%'
                            }
                        ]}
                >
                    <TouchableOpacity
                            style={[
                                styles.flagButtonView,
                                layout === 'second' ? styles.flagButtonExtraWidth : {},
                                flagButtonStyle ? flagButtonStyle : {},
                                countryPickerButtonStyle ? countryPickerButtonStyle : {}
                            ]}
                            disabled={true}
                            onPress={() => {
                                setModalVisible(true);
                            }}
                    >
                        <CountryPicker
                                onSelect={onSelect}
                                withEmoji
                                withFilter
                                withFlag
                                filterProps={{
                                    ...filterProps
                                }}
                                countryCode={countryCode}
                                withCallingCode
                                disableNativeModal={disabled}
                                visible={modalVisible}
                                theme={withDarkTheme ? DARK_THEME : DEFAULT_THEME}
                                renderFlagButton={renderFlagButton}
                                onClose={() => setModalVisible(false)}
                                {...countryPickerProps}
                        />
                        {code && layout === 'second' && (
                                <Text
                                        style={[
                                            styles.codeText,

                                            codeTextStyle ? codeTextStyle : {}
                                        ]}
                                >{`+${code}`}</Text>
                        )}
                        {!disableArrowIcon && (
                                <React.Fragment>
                                    {renderDropdownImage
                                            ? renderDropdownImage
                                            : renderMyDropdownImage()}
                                </React.Fragment>
                        )}
                    </TouchableOpacity>
                    {code && layout === 'first' && (
                            <Box
                                    style={[{
                                        // height: 40,
                                        borderRightWidth: 1,
                                        borderColor: theme.colors.greyMedium,
                                        marginRight: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }, disabled ? { opacity: 0.5 } : {}]}
                            >
                                <Text
                                        style={[
                                            styles.codeText,
                                            codeTextStyle ? codeTextStyle : {}
                                        ]}
                                >{`+${code}`}</Text>
                            </Box>
                    )}
                    <View
                            style={[
                                styles.textContainer,
                                textContainerStyle ? textContainerStyle : {}
                            ]}
                    >
                        <TextInput
                                style={[
                                    styles.numberText,
                                    textInputStyle ? textInputStyle : {},
                                    disabled ? { opacity: 0.5 } : {}
                                ]}
                                placeholder={placeholder ? placeholder : 'Número de teléfono'}
                                placeholderTextColor={theme.colors.inputPlaceholderColor}
                                onChangeText={onChangeText}
                                value={number}
                                editable={disabled ? false : true}
                                selectionColor='black'
                                keyboardAppearance={withDarkTheme ? 'dark' : 'default'}
                                keyboardType='number-pad'
                                autoFocus={autoFocus}
                                {...textInputProps}
                        />
                    </View>
                </View>
            </CountryModalProvider>
    );
}

export const isValidNumber = (number, countryCode) => {
    try {
        const parsedNumber = phoneUtil.parse(number, countryCode);
        return phoneUtil.isValidNumber(parsedNumber);
    } catch (err) {
        return false;
    }
};

export default forwardRef(PhoneInput);
