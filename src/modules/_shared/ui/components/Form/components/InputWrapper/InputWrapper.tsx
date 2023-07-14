import { Box } from '@main-components/Base/Box';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { InputWrapperProps } from '@main-components/Form/components/InputWrapper/InputWrapperProps';
import SizingUtils from '@utils/misc/sizing-utils';

export function InputWrapper({ hasError, children, bg, style }: InputWrapperProps) {
    const theme = useTheme();
    return (
            <Box
                    borderRadius={SizingUtils.mscale(4)}
                    borderWidth={1}
                    borderColor={hasError ? 'dangerMain' : 'greyLight'}
                    bg={bg ?? 'greyLight'}
                    justifyContent='center'
                    overflow={'hidden'}
                    style={style}
            >
                {children}
            </Box>
    );
}
