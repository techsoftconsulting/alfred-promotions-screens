import { BaseTextInputProps } from '@main-components/Form/inputs/TextInput/components/BaseTextInput/BaseTextInputProps';

export interface BaseValidationCodeInputProps extends BaseTextInputProps {
    code?: string;
    number: number;
    autoFocusFirst?: boolean;
    obfuscation?: boolean;
    container?: any;
    onInputComplete?: any;
    numberItemSize?: number;
}
