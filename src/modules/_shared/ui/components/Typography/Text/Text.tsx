import {BaseText} from '@modules/_shared/ui/theme/AppTheme';
import {TextProps} from './TextProps';

const defaultProps: Partial<TextProps> = {
    variant: 'body1',
    note: false,
    bold: false,
    uppercase: false
};

export default function Text(props: TextProps) {
    return (
        <BaseText
            {...{...defaultProps, ...props}}
            fontWeight={props.bold ? 'bold' : undefined}
            textTransform={props.uppercase ? 'uppercase' : undefined}
            color={props.note ? 'textNoteColor' : props.color ?? "textColor"}
            textAlign={props.align}
            numberOfLines={props.numberOfLines}
        />
    );
}
