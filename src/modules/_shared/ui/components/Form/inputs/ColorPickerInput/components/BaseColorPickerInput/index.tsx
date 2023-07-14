import { ChromePicker } from 'react-color';
import { Box } from '@main-components/Base';
import { BaseInputProps } from '@main-components/Form/inputs/BaseInput/BaseInputProps';

export interface BaseColorPickerInputProps extends BaseInputProps {
    onChange?: any;
    value?: any;
}

export default function BaseColorPickerInput(props: BaseColorPickerInputProps) {
    return (
        <Box mb={'s'}>
            <ChromePicker
                name='color'
                color={props.value}
                onChange={color => props.onChange(color.hex)}
            />
        </Box>
    );
}