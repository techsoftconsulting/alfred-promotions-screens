import { TextProps } from '@main-components/Typography/Text';

export interface TranslatedTextProps extends Omit<TextProps, 'children'> {
    translationKey: string;
    options?: any;
}
