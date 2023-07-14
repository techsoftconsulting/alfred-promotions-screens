import { TextInputProps } from '@main-components/Form/inputs/TextInput';
import { Theme } from '@shared/ui/theme/AppTheme';

export interface PasswordInputProps extends TextInputProps {
    source?: string;
    validate?: any;
    color?: keyof Theme['colors'];
}
