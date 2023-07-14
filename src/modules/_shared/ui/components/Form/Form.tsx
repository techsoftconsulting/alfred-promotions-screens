import {Box} from '@main-components/Base/Box';
import SaveButton from '@main-components/Form/components/SaveButton';
import React, {cloneElement, useEffect, useMemo} from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {FormToolbar} from './components/FormToolbar';
import FormProps from "@main-components/Form/FormProps";

export function checkInputSource(props: any) {
    if (!props.source) throw new Error('No source defined');
}


function DefaultWrapper(props: any) {
    return <Box
        width="100%"
    >{props.children}</Box>;
}

export function Form({
    defaultValues,
    children,
    onSubmit,
    saveButtonProps,
    toolbar = <DefaultFormToolbar/>,
    Wrapper = DefaultWrapper,
    containerStyle = {},
}: FormProps) {
    const methods = useForm({
        defaultValues: useMemo(() => {
            return defaultValues;
        }, [defaultValues]),
    });

    const {control, reset} = methods;

    useEffect(() => {
        reset(defaultValues);
    }, [defaultValues]);

    return (
        <FormProvider {...methods}>
            <Box style={{...containerStyle}}>
                <Wrapper>
                    {children}
                </Wrapper>
                <>
                    {toolbar &&
                        cloneElement(toolbar, {
                            onSubmit,
                            saveButtonProps: saveButtonProps
                        })}
                </>
            </Box>
        </FormProvider>
    )


}

const DefaultFormToolbar = (props: {
    onSubmit?: any;
    saveButtonProps?: any;
}) => {
    return (
        <FormToolbar {...props}>
            <SaveButton {...props.saveButtonProps} />
        </FormToolbar>
    );
};
