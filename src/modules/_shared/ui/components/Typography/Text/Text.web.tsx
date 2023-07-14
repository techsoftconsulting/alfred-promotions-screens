import {BaseText, Theme, useTheme} from '@modules/_shared/ui/theme/AppTheme';
import {TextProps} from './TextProps';

const defaultProps: Partial<TextProps> = {
    variant: 'body1',
    note: false,
    bold: false,
    uppercase: false
};

export default function Text(props: TextProps) {
    const finalProps = {...{...defaultProps, ...props}};
    const {textVariants} = useTheme();
    const variant: any =
        textVariants[finalProps.variant as keyof Theme['textVariants']];

    return (
        <BaseText
            {...finalProps}
            fontWeight={props.bold ? 'bold' : undefined}
            textTransform={props.uppercase ? 'uppercase' : undefined}
            color={props.note ? 'textNoteColor' : props.color ?? "textColor"}
            textAlign={props.align}
            numberOfLines={props.numberOfLines}
            /*    fontFamily="AppFont" */
            /*  variant="big1" */
            fontSize={variant.fontSize}
            fontFamily={variant.fontFamily}
        />
    );
}
