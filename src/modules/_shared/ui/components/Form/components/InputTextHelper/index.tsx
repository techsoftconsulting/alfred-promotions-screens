import theme from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { HelperText } from 'react-native-paper';
import { Box } from '../../../Base/Box';

interface InputTextHelperProps {
    error?: any;
    helperText?: string;
}

export default function InputTextHelper(props: InputTextHelperProps) {
    const hasHelperText = !!props.helperText;

    const hasError = !!props.error;
    return (
        <Box>
            <HelperText
                type={hasError ? 'error' : 'info'}
                theme={{ colors: { error: theme.colors.dangerMain } }}
                visible={hasError || hasHelperText}
            >
                {hasError ? props.error : props.helperText}
            </HelperText>
        </Box>
    );
}
