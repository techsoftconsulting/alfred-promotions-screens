import { Box } from '@main-components/Base/Box';
import Text from '@main-components/Typography/Text';
import React from 'react';
import { Theme } from '@shared/ui/theme/AppTheme';

export default function InputLabel(props: InputLabelProps) {
    return props.label ? (
            <LabelContainer noMargin={props.noMargin}>
                <Box flexDirection={'row'}>
                    {typeof props.label == 'string' ? (
                            <Text
                                    variant='inputLabel'
                                    color={props.hasError ? props.errorColor ?? 'dangerMain' : 'primaryMain'}
                                    bold
                            >
                                {props.label}
                            </Text>
                    ) : (
                            props.label
                    )}
                    {
                            props.required && (
                                    <Box ml={'xs'}>
                                        <Text
                                                variant={'heading3'}
                                                style={{ lineHeight: 15 }}
                                                color={'dangerMain'}
                                        >*</Text>
                                    </Box>
                            )
                    }
                </Box>
            </LabelContainer>

    ) : null;
}

function LabelContainer({ children, noMargin }) {
    const props = noMargin ? {} : { mb: 's' };

    return (
            <Box {...props} pl={'m'}>
                {children}
            </Box>
    );
}

interface InputLabelProps {
    label?: any;
    errorColor?: Theme['colors'],
    required?: boolean;
    hasError?: any;
    noMargin?: boolean;
}
