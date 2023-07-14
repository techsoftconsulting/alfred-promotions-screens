import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Platform } from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import { BaseSpinnerInputProps } from './BaseSpinnerInputProps';
import SizingUtils from '@utils/misc/sizing-utils';

export default function BaseSpinnerInput(props: BaseSpinnerInputProps) {
    const theme = useTheme();
    return (
            <InputSpinner
                    value={props.value}
                    skin='round'
                    max={props.max}
                    min={props.min}
                    height={SizingUtils.mscale(40)}
                    colorAsBackground={true}
                    color={theme.colors.primaryMain}
                    buttonFontSize={theme.textVariants.big1.fontSize}
                    fontSize={theme.textVariants.big1.fontSize}
                    inputStyle={{
                        fontSize: theme.textVariants.body.fontSize,
                        backgroundColor: theme.colors.greyLightest
                    }}

                    style={{
                        elevation: 0,
                        borderRadius: 25,
                        ...Platform.select({
                            web: {
                                boxShadow: 'none'
                            }
                        })
                    }}
                    colorMax={theme.colors.primaryMain}
                    colorMin={theme.colors.primaryMain}
                    onChange={(num) => {
                        props.onChange && props.onChange(num);
                    }}
            />
    );
}
