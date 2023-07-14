import { useForm } from '@shared/domain/form/useForm';
import { Box } from '@main-components/Base';
import React, { useEffect, useMemo } from 'react';

interface DependentInputProps {
    children: any;
    renderIf: (dependencyValues) => boolean;
    deps: string[];
    conditionMatchedCallback?: any;
    conditionNotMatchedCallback?: any;
}

export default function DependentInput({
    children,
    renderIf,
    deps,
    conditionMatchedCallback,
    conditionNotMatchedCallback
}: DependentInputProps) {
    const { watch, setValue } = useForm();

    const values = watch(deps);

    const isValid = renderIf(values);

    useEffect(() => {
        if (isValid) {
            conditionMatchedCallback?.({ setValue });
        } else {
            conditionNotMatchedCallback?.({ setValue });
        }
    }, [isValid]);

    return useMemo(() => {
        const show = renderIf(values);

        if (!show) return <Box></Box>;

        return children;
    }, [values]);

}