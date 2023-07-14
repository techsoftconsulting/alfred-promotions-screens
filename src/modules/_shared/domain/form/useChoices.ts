import get from 'lodash/get';
import { cloneElement, isValidElement, ReactElement, useCallback } from 'react';

export type Identifier = string | number;
interface Record {
    id: Identifier;
    [key: string]: any;
}

export type OptionTextElement = ReactElement<{
    record: Record;
}>;
export type OptionTextFunc = (choice: object) => string | OptionTextElement;
export type OptionText = OptionTextElement | OptionTextFunc | string;

export interface ChoicesInputProps<T = any> extends Omit<{}, 'source'> {
    // Optional as choices inputs can be used inside Reference inputs which inject the source
    source?: string;

    // Optional as choices inputs can be used inside Reference inputs which inject the choices
    choices?: object[];
}

export interface ChoicesProps {
    choices: object[];
    optionValue?: string;
    optionText?: OptionText;
    translateChoice?: boolean;
}

export interface UseChoicesOptions {
    optionValue?: string;
    optionText?: OptionText;
    disableValue?: string;
    translateChoice?: boolean;
}

const useChoices = ({
    optionText = 'name',
    optionValue = 'id',
    disableValue = 'disabled'
}: UseChoicesOptions) => {
    const getChoiceText = useCallback(
        (choice) => {
            if (isValidElement<{ record: any }>(optionText)) {
                return cloneElement<{ record: any }>(optionText, {
                    record: choice
                });
            }
            const choiceName =
                typeof optionText === 'function'
                    ? optionText(choice)
                    : get(choice, optionText);

            return choiceName;
        },
        [optionText]
    );

    const getChoiceValue = useCallback((choice) => get(choice, optionValue), [
        optionValue
    ]);

    const getDisableValue = useCallback((choice) => get(choice, disableValue), [
        disableValue
    ]);

    return {
        getChoiceText,
        getChoiceValue,
        getDisableValue
    };
};

export default useChoices;
