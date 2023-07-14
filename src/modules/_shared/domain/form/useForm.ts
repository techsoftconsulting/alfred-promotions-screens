import { useFormContext as useBaseFormContext } from 'react-hook-form';

export function useForm() {
    const {
        getValues,
        watch,
        control,
        setValue,
        formState: { errors, isSubmitting },
        setError,
        trigger,
        clearErrors,
        reset,
        handleSubmit
    } = useBaseFormContext();

    return {
        reset,
        trigger,
        isSubmitting,
        getValues,
        watch,
        control,
        setValue,
        errors,
        setError,
        clearErrors,
        handleSubmit
    };
}
