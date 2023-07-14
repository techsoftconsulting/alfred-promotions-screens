export const BaseInputDocTypes = {
    source: {
        name: 'source',
        type: {name: 'string', required: true},
        defaultValue: 'input',
        description: 'Field name which will store the value',
        control: {
            type: 'text'
        }
    },
    label: {
        name: 'label',
        type: {name: 'string', required: false},
        control: {
            type: 'text'
        },
        defaultValue: 'Label',
        description: 'Label'
    },
    placeholder: {
        name: 'placeholder',
        type: {name: 'string', required: false},
        control: {
            type: 'text'
        },
        defaultValue: 'Please, select an option',
        description: 'Placeholder'
    },
    helperText: {
        name: 'helperText',
        type: {name: 'string', required: false},
        control: {
            type: 'text'
        },
        defaultValue: 'This is a helper text',
        description: 'Additional text below the field'
    },
    disabled: {
        name: 'disabled',
        type: {name: 'boolean', required: false},
        control: {
            type: 'boolean'
        },
        defaultValue: false,
        description: 'Disable the field'
    },
    error: {
        name: 'error',
        type: {name: 'error', required: false},
        control: {
            type: 'text'
        },
        defaultValue: undefined,
        description:
            'Error text when field has invalid value. Replaces helperText'
    },
    required: {
        name: 'required',
        type: {name: 'error', required: false},
        control: {
            type: 'text'
        },
        defaultValue: true,
        description:
            '* sign when a field is required'
    }
};
