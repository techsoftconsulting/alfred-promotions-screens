import { PaginationRowProps } from '@main-components/Layout/PaginationRow/PaginationRowProps';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Box, Icon } from '@main-components/Base';
import Text from '@main-components/Typography/Text';
import SelectInput from '@main-components/Form/inputs/SelectInput';
import Form from '@main-components/Form';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import { Platform } from 'react-native';

export function PaginationRow(props: PaginationRowProps) {
    const theme = useTheme();
    const numberOfItemsPerPageList = [10, 20, 50];

    /*   const from = props.page * props.perPage;
       const to = Math.min((props.page + 1) * props.perPage, props.total);*/


    function Controls() {

        function ControlButton({ onPress, ...props }) {
            return (
                <TouchableOpacity
                    disabled={props.disabled}
                    style={{
                        opacity: props.disabled ? 0.5 : 1
                    }}
                    onPress={onPress}
                >
                    <Icon
                        {...props}
                    />
                </TouchableOpacity>
            );
        }

        return (
            <Box flexDirection={'row'}>
                <Box marginHorizontal={'m'}>
                    <ControlButton
                        disabled={props.page == 1}
                        onPress={() => {
                            props.onChangePage(1);
                        }}
                        name={'skip-back'}
                        type={'feather'}
                        color={'textColor'}
                        numberSize={20}
                    />
                </Box>

                <Box marginHorizontal={'m'}>
                    <ControlButton
                        disabled={props.page == 1}
                        onPress={() => {
                            props.onChangePage(props.page - 1);
                        }}
                        name={'chevron-left'}
                        color={'textColor'}
                        type={'feather'}
                        numberSize={20}
                    />
                </Box>

                <Box marginHorizontal={'m'}>
                    <ControlButton
                        disabled={props.page >= props.totalPages}
                        onPress={() => {
                            props.onChangePage(props.page + 1);
                        }}
                        name={'chevron-right'}
                        color={'textColor'}
                        type={'feather'}
                        numberSize={20}
                    />
                </Box>

                <Box marginHorizontal={'m'}>
                    <ControlButton
                        disabled={props.page >= props.totalPages}
                        name={'skip-forward'}
                        color={'textColor'}
                        type={'feather'}
                        numberSize={20}
                        onPress={() => {
                            props.onChangePage(props.totalPages);
                        }}
                    />
                </Box>

            </Box>
        );
    }

    const alignM: any = {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end'
    };
    return (
        <Box alignItems={alignM[props.align] ?? 'flex-end'}>
            <Box
                flexDirection={{
                    large: 'row',
                    phone: 'column'
                }}
                alignItems={'center'}
            >
                <Box
                    alignItems={'center'}
                    flexDirection={'row'}
                    mb={{
                        phone: 'm',
                        large: null as any
                    }}
                >
                    {
                        Platform.OS === 'web' && (
                            <Box
                                alignItems={'center'}
                                flexDirection={'row'}
                            >
                                <Text>Por página</Text>

                                <Box marginHorizontal={'s'}>
                                    <Form
                                        defaultValues={{
                                            perPage: props.perPage
                                        }}
                                        onSubmit={() => {

                                        }}
                                        toolbar={<Box />}
                                    >
                                        <SelectInput
                                            canClear={false}
                                            noMargin={true}
                                            WrapperComponent={({ children }) => <Box
                                                borderRadius={20}
                                                bg={'white'}
                                            >{children}</Box>}
                                            source={'perPage'}
                                            onChange={(value) => {
                                                props.onChangePerPage(value);
                                            }}
                                            choices={numberOfItemsPerPageList.map((e) => {
                                                return {
                                                    id: e,
                                                    name: e.toString()
                                                };
                                            })}
                                        />
                                    </Form>
                                </Box>
                            </Box>
                        )
                    }

                    <Box>
                        <Text>{props.page} de {props.totalPages}</Text>
                    </Box>
                </Box>
                <Box ml={'s'}>
                    <Controls />
                </Box>
            </Box>
        </Box>
    );

}
