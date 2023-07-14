export interface DropdownProps {
    AnchorComponent?: JSX.Element;
    placeholder?: string;
    value?: string;
    options: { label: string; value?: string; onClick?: any; itemStyle?: any }[];
    anchorOrigin?: any;
    itemStyle?: any;
    className?: any;
    selected?: string;
}
