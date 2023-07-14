import { useUtils } from '@modules/_shared/domain/hooks/use-utils';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IconButton, IconButtonProps } from '@main-components/Base';

export interface SaveIconButtonProps extends Omit<IconButtonProps, 'onPress'> {
    onSubmit?: any;
    label?: string;
}

export default function SaveIconButton(props: SaveIconButtonProps) {
    const { handleSubmit, formState } = useFormContext();
    const { object } = useUtils();

    return (
        <IconButton
            {...object.omit(props, ['label'])}
            onPress={props.onSubmit ? handleSubmit(props.onSubmit) : () => {
            }}
            loading={props.loading}
        />
    );
}
