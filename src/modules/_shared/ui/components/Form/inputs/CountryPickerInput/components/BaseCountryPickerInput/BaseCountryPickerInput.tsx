import {Box} from '@main-components/Base/Box';
import {Icon} from '@main-components/Base/Icon';
import Text from '@main-components/Typography/Text';
import React, {useEffect, useState} from 'react';
import CountryPicker, {DEFAULT_THEME, Flag} from 'react-native-country-picker-modal';
import {useTheme} from "@modules/_shared/ui/theme/AppTheme";
import {
    BaseCountryPickerInputProps
} from "@main-components/Form/inputs/CountryPickerInput/components/BaseCountryPickerInput/BaseCountryPickerInputProps";

export function BaseCountryPickerInput(props: BaseCountryPickerInputProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [countryCode, setCountryCode] = useState(props.defaultValue?.code);
    const [countryName, setCountryName] = useState(props.defaultValue?.name);

    useEffect(() => {
        setCountryCode(props.value?.code);
        setCountryName(props.value?.name);
    }, [props.value]);

    function renderFlagButton(props) {
        const {layout = 'first', flagSize} = props;
        if (!countryCode) return <Box/>;

        if (layout === 'first') {
            return (
                <Flag
                    countryCode={countryCode}
                    flagSize={flagSize ? flagSize : DEFAULT_THEME.flagSize}
                />
            );
        }
        return <Box/>;
    }


    function onSelect(country) {
        setCountryCode(country.cca2);
        setCountryName(country.name);

        if (props.onChange) {
            props.onChange({
                name: country.name,
                code: country.cca2
            });
        }
    }

    const theme = useTheme();
    return (
        <Box>
            <Box
                height={40}
                alignItems="center"
                flexDirection="row"
                paddingHorizontal="m"
            >

                <CountryPicker
                    onSelect={onSelect}
                    withEmoji
                    withFilter
                    withFlag
                    countryCode={countryCode}
                    visible={modalVisible}
                    renderFlagButton={renderFlagButton}
                    onClose={() => setModalVisible(false)}
                    translation="spa"
                    {...{
                        // closeButtonImage: images.C,
                        theme: {
                            onBackgroundTextColor: theme.colors.greyMain,
                            fontSize: 16,
                        },
                        filterProps: {
                            placeholder: 'Filter by country...'
                        }
                    }}
                />
                <Box flex={1}>
                    {countryName ? (
                        <Text
                            onPress={() => {
                                setModalVisible(true);
                            }}
                            variant="body"
                            color="textColor"
                        >
                            {countryName}
                        </Text>
                    ) : (
                        <Text
                            onPress={() => {
                                setModalVisible(true);
                            }}
                            variant="body"
                            color="greyMedium"
                        >
                            Pick a country
                        </Text>
                    )}
                </Box>

                <Box>
                    <Icon
                        name="chevron-down"
                        numberSize={15}
                        color="greyMain"
                    />
                </Box>
            </Box>
        </Box>

    );
}
