import BaseSwitchSelector from 'react-native-switch-selector';

interface SwitchSelectorProps {
    options: any;
    initial?: number;
    onPress?: any;
    style?: {
        textColor?: string;
        selectedColor?: string;
        buttonColor?: string;
        borderColor?: string;
        hasPadding?: boolean;
        height?: number;
        buttonMargin?: number;
    };
    value?: any;
}

export default function SwitchSelector(props: SwitchSelectorProps) {
    const { options, initial, onPress, style, ...rest } = props;

    return (
        /*@ts-ignore*/
        <BaseSwitchSelector
            options={options}
            initial={initial ?? 0}
            onPress={(value: any) => onPress?.(value)}
            {...style}
            {...rest}
        />
    );
}
