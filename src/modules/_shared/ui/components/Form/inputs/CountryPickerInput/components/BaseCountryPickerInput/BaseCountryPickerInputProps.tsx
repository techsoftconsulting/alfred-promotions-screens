import {Theme} from "@modules/_shared/ui/theme/AppTheme";

type CountryValue = {
    name: string;
    code: string;
};

export interface BaseCountryPickerInputProps {
    defaultValue?: CountryValue;
    value?: CountryValue;
    error?: string;
    label?: string;
    disabled?: boolean;
    style?: any;
    dense?: boolean;
    width?: number;
    labelColor?: keyof Theme['colors'];
    helperText?: string;
    onChange: any;
}