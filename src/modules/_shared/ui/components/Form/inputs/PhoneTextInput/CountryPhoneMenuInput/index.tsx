import SelectInput from '@main-components/Form/inputs/SelectInput';
import FormField from '@shared/domain/form/FormField';
import React from 'react';
import { Platform } from 'react-native';

export default function CountryPhoneMenuInput(props) {
    const fieldProps = {
        component: (
            <SelectInput
                source="phoneCode"
                style={{
                    height: 20,
                    zIndex: 999,
                    ...(Platform.OS == 'web' && { marginLeft: 5 })
                }}
                //onChange={() => {}}
                mode="dialog"
                error=""
                options={[
                    {
                        id: '+1',
                        name: '+1'
                    },
                    {
                        id: '+57',
                        name: '+57'
                    },
                    {
                        id: '+58',
                        name: '+58'
                    }
                ]}
            />
        ),
        control: props.control,
        source: 'phoneCode'
        //validate: child.props.validate,
    };

    return <FormField {...fieldProps} />;
}
