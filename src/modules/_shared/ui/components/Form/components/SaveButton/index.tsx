import { Button, ButtonProps } from '@main-components/Base/Button';
import { useUtils } from '@modules/_shared/domain/hooks/use-utils';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface SaveButtonProps extends Omit<ButtonProps, 'onPress'> {
    onSubmit?: any;
    label?: string;
}

export default function SaveButton(props: SaveButtonProps) {
    const { handleSubmit, formState } = useFormContext();
    const { object } = useUtils();

    return (
        <Button
            {...object.omit(props, ['label'])}
            onPress={props.onSubmit ? handleSubmit(props.onSubmit) : () => {}}
            title={props.label || 'Save'}
            loading={formState.isSubmitting || props.loading}
        />
    );
}
