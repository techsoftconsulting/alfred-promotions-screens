export interface BaseSpinnerInputProps {
    value: number;
    max?: number;
    min?: number;
    onChange?: (num: any) => void;
    error?: string;
    label?: any;
    helperText?: string;
}
