import { useFormContext } from 'react-hook-form';
import { useUtils } from '@modules/_shared/domain/hooks/use-utils';

export default function useFormFieldErrors(name: string) {
    const { errors } = useFormContext();

    const { object: objectUtils } = useUtils();
    const error = objectUtils.get(errors, name, null);

    const hasError = !!error && error?.message;


    return {
        hasError,
        error: error?.message
    };
}
