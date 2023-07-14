import BaseTextInput from '@main-components/Form/inputs/TextInput/components/BaseTextInput';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { BaseTextareaInputProps } from './BaseTextareaInputProps';

function BaseTextareaInput({
    value,
    maxLength,
    ...props
}: BaseTextareaInputProps, ref) {
    const theme = useTheme();
    return (
        <BaseTextInput
            {...props}
            ref={ref}
            value={value}
            multiline={true}
            maxLength={maxLength}
            style={{
                // minHeight: 100,
                paddingVertical: theme.spacing.s,
                ...(props.style ?? {})
            }}
        />
    );
}

export default React.forwardRef(BaseTextareaInput);

