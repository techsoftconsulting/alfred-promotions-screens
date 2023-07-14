import useInput from '@shared/domain/form/useInput';
import React from 'react';
import BaseTimeInput from '@main-components/Form/inputs/TimeInput/components/BaseTimeInput';
import DateTimeUtils from '@utils/misc/datetime-utils';
import useFormFieldErrors from '@shared/domain/form/use-form-field-errors';
import Text from '@main-components/Typography/Text';
import { BaseInput } from '@main-components/Form/inputs/BaseInput';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import ScrollView from '@main-components/Utilities/ScrollView';
import { Box } from '@main-components/Base/Box';
import BaseCheckboxItemInput from '@main-components/Form/inputs/CheckboxInput/components/BaseCheckboxItemInput';


export function createScheduleDate(date) {
    return new Date(`2022-01-01 ${DateTimeUtils.format(date, 'HH:mm', false)}`);
}

export function isValidSchedule(message) {
    return (schedule) => {
        if (!schedule) return message;
        if (!schedule?.MONDAY) return message;
        const items = Object.values(schedule);

        if (items.filter(el => el.active).length === 0) return message;

        const invalidItems = items.some(el => {
            if (el.active) {
                if (!el.endHour || !el.startHour) return message;
            }

            return false;
        });

        if (invalidItems) return message;

        return;
    };

}

export default function WeekScheduleInput(props) {
    const { input } = useInput({
        defaultValue: props.defaultValue,
        validate: props.validate,
        source: props.source as string
    });

    const { error } = useFormFieldErrors(props.source as string);

    const value = input.value == '' ? {} : input.value ?? {};

    const defaultRange = useGetDefaultRange();

    const hideSlot = props.hideSlot ?? false;

    const errors = {};

    return (
            <BaseInput
                    label={props.label}
                    required={props.required}
                    error={error}
                    WrapperComponent={WrapperContainer}
            >
                <ScrollView>
                    {
                        defaultRange.map((e, key) => {
                            const el = value ? value[e.id] ?? {} : {};

                            return (
                                    <Box
                                            key={key}
                                    >
                                        <WeekRowView
                                                errors={errors[e.id]}
                                                hideSlot={hideSlot}
                                                values={{
                                                    active: el.active ?? false, //el.active,
                                                    startHour: el.startHour,
                                                    endHour: el.endHour,
                                                    /*slot: el.slot,*/
                                                    day: e.id
                                                }}
                                                onChange={(item) => {
                                                    input.onChange({
                                                        ...value,
                                                        [e.id]: item
                                                    });
                                                }}
                                        />
                                    </Box>
                            );
                        })
                    }


                </ScrollView>

            </BaseInput>
    );
}

function WeekRowView({ values, hideSlot, errors, onChange }) {
    const defaultRange = useGetDefaultRange();

    const dayValue = defaultRange.filter(e => values.day.includes(e.id)).map(e => e.code);

    return (
            <Box
                    p={'m'}
                    marginHorizontal={'m'}
                    bg={'white'}
                    flexDirection={'row'}
                    borderBottomWidth={1}
                    /*opacity={values?.active ? 1 : 0.5}*/
                    borderBottomColor={'greyLight'}
            >
                <Box
                        flex={0.6}
                        mr={'s'}
                        alignSelf={'center'}
                >
                    <BaseInput
                            noMargin
                            WrapperComponent={Box}
                    >
                        <BaseCheckboxItemInput
                                value={values?.active}
                                onChange={(newValue) => {
                                    onChange({
                                        ...values,
                                        active: newValue,
                                        ...!newValue && {
                                            startHour: null,
                                            endHour: null
                                        }
                                    });
                                }}
                                title={<Text
                                        bold
                                >{dayValue}</Text>}
                        />
                    </BaseInput>

                </Box>
                <Box
                        flex={0.2}
                        flexGrow={0.5}
                        mr={'m'}
                        opacity={values?.active ? 1 : 0.5}
                >
                    <BaseInput
                            bg={'greyLight'}
                            required
                            label={'Hora de apertura'}
                            error={errors?.startHour}
                    >
                        <BaseTimeInput
                                wrapper={TouchableOpacity}
                                placeholder={'Hora de apertura'}
                                value={values.startHour}
                                disabled={!values.active}
                                onChangeText={(value) => {
                                    onChange({
                                        ...values,
                                        startHour: value ? createScheduleDate(value) : null
                                    });
                                }}
                        />
                    </BaseInput>
                </Box>
                <Box
                        flexGrow={0.5}
                        flex={0.2}
                        opacity={values?.active ? 1 : 0.5}
                >
                    <BaseInput
                            bg={'greyLight'}
                            required
                            label={'Hora de cierre'}
                            error={errors?.endHour}
                    >
                        <BaseTimeInput
                                wrapper={TouchableOpacity}
                                placeholder={'Hora de cierre'}
                                value={values.endHour}
                                disabled={!values.active}
                                onChangeText={(value) => {
                                    onChange({
                                        ...values,
                                        endHour: value ? createScheduleDate(value) : null
                                    });
                                }}
                        />
                    </BaseInput>
                </Box>
            </Box>
    );
}

function WrapperContainer({ children }) {
    return (
            <Box
                    minHeight={400}
                    flex={1}
                    p={'s'}
                    borderRadius={10}
                    borderWidth={1}
                    borderColor={'greyLight'}
            >
                {children}
            </Box>
    );
}

function validateRow({ hideSlot, values }) {
    const errors = {};

    if (values.active && !values.startHour) {
        errors['startHour'] = 'Completa este campo';
    }

    if (values.active && !values.endHour) {
        errors['endHour'] = 'Completa este campo';
    }

    if (!hideSlot) {
        const invalidSlot = values.slot == '' || values.slot == 0 || values.slot < 30;

        if (values.active && invalidSlot) {
            errors['slot'] = 'Debe ser mayor a 30 mins';
        }
    }

    return errors;
}


const defaultRange = [
    {
        id: 'MONDAY',
        name: 'Lunes',
        code: 'Lun'
    },
    {
        id: 'TUESDAY',
        name: 'Martes',
        code: 'Mar'
    },
    {
        id: 'WEDNESDAY',
        name: 'Miercoles',
        code: 'Mie'
    },
    {
        id: 'THURSDAY',
        name: 'Jueves',
        code: 'Jue'
    },
    {
        id: 'FRIDAY',
        name: 'Viernes',
        code: 'Vie'
    },
    {
        id: 'SATURDAY',
        name: 'Sabado',
        code: 'Sab'

    },
    {
        id: 'SUNDAY',
        name: 'Domingo',
        code: 'Dom'
    }
];

function useGetDefaultRange() {
    return defaultRange;
}


export function isValidScheduleValues() {
    return (values) => {
        const currentValues = Object.values(values ?? {});

        if (currentValues.length == 0) {
            return 'Por favor, configura el horario';
        }

        if (currentValues.filter(v => !v.active).length == defaultRange.length) {
            return 'Horario incompleto, por favor configuralo correctamente';
        }

        return undefined;
    };
}