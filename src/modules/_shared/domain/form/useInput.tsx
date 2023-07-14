import { ChangeEvent, FocusEvent, useCallback } from 'react';
import { useController, useFieldArray, useFormContext, Validate } from 'react-hook-form';
import isRequired from './isRequired';

export interface InputProps<T = any> extends Omit<{}, 'validate' | 'children'> {
    defaultValue?: any;
    id?: string;
    meta?: any;
    name?: string;
    onBlur?: (event: FocusEvent<T>) => void;
    onChange?: (event: ChangeEvent | any) => void;
    onFocus?: (event: FocusEvent<T>) => void;
    options?: T;
    resource?: string;
    source: string;
    validate?: Validate | Validate[];
}

export interface InputHandlerProps {
    onChange: any;
    onBlur: any;
    name?: string;
    value?: any;
}

export interface UseInputValue {
    id: string;
    isRequired: boolean;
    ref: any;
    input: InputHandlerProps;
    meta: {
        invalid: boolean;
        isTouched: boolean;
        isDirty: boolean;
    };

}

export default function useInput({
    defaultValue,
    id,
    name,
    source,
    validate,
    onBlur: customOnBlur,
    onChange: customOnChange,
    onFocus: customOnFocus,

    ...options
}: InputProps): UseInputValue {
    const finalName = name || source;

    const { control } = useFormContext();
    const defaultValues = control.defaultValuesRef.current;
    const fieldDefaultValue = defaultValues[source] ?? '';


    const composeValidations = (props: any) => {

        if (!validate) return;
        if (typeof validate !== 'function') {
            const fn: Validate = async () => {

                const resultsPromises: Promise<any>[] = validate
                ?.map((vfn) => {
                    let res = vfn(props);

                    if (res instanceof Promise) {
                        return res;
                    } else if (typeof res == 'object') {
                        return Promise.resolve(res);
                    } else {
                        return Promise.resolve({ message: res as string });
                    }
                });

                const result = (await Promise.all(resultsPromises)).filter((r) => r?.message !== undefined)
                .shift();

                return (result as any)?.message;
            };

            return fn(props);
        }

        return validate(props);
    };

    const {
        field: { ref, onBlur, onChange, value },
        meta: { invalid, isTouched, isDirty }
    } = useController({
        name: finalName,
        rules: { validate: validate ? composeValidations : undefined },
        defaultValue: defaultValue,
        control: control
    });

    const handleBlur = useCallback(
        (event) => {
            onBlur();

            if (typeof customOnBlur === 'function') {
                customOnBlur(event);
            }
        },
        [onBlur, customOnBlur]
    );

    const handleChange = useCallback(
        (event) => {
            onChange(event);
            if (typeof customOnChange === 'function') {
                customOnChange(event);
            }
        },
        [onChange, customOnChange]
    );

    return {
        id: id || source,
        input: {
            name: name,
            onBlur: handleBlur,
            onChange: handleChange,
            value: value
        },
        meta: { invalid, isTouched, isDirty },
        isRequired: isRequired(validate),
        ref: ref
    };
}


type UseArrayInputValue = {
    items: any[];
    append: (value: any) => void;
    insert: (index: number, value: any) => void;
    remove: (index: number | number[]) => void;
}

export function useArrayInput({
    id,
    name,
    source,
    validate,
    onBlur: customOnBlur,
    onChange: customOnChange,
    onFocus: customOnFocus,
    ...options
}: InputProps): UseArrayInputValue {

    const finalName = name || source;

    const { control } = useFormContext();
    const { insert, remove, append, fields } = useFieldArray({
        name: finalName,
        control: control
    });

    return {
        items: fields,
        insert,
        remove,
        append
    };
}