import React from 'react';
import {Box, TableProps} from '@main-components/Base';
import {Cell as BaseTableCell, Row as BaseTableRow, TableWrapper as BaseTableBody} from 'react-native-table-component';
import {StyleSheet, View} from 'react-native';
import ScrollView from '@main-components/Utilities/ScrollView';
import AppTheme from '@modules/_shared/ui/theme/AppTheme';
import useDimensions from "@utils/hooks/useDimensions";

export function Table(props: TableProps) {

    const {swidth} = useDimensions()

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={false}
            >
                <View>
                    {/* <BaseTable borderStyle={{borderWidth: 0, borderColor: '#C1C0B9'}}>
                        <BaseTableRow
                            data={props.tableHead}
                            widthArr={props.tableHeadWidths}
                            style={styles.header}
                            textStyle={styles.headerText}
                        />
                    </BaseTable>*/}
                    <ScrollView style={styles.dataWrapper}>
                        {props.children}
                        {/*<BaseTable borderStyle={{borderBottomWidth: 0, borderColor: '#C1C0B9'}}>
                            {
                                props.tableData!.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={props.tableHeadWidths}
                                        style={[styles.row, {
                                            borderBottomWidth: index == props.tableData?.length - 1 ? 0 : 1
                                        }]}
                                        textStyle={rowData.map((e, i) => props.cellsTextStyle?.[i]) ?? styles.text}
                                    />
                                ))
                            }
                        </BaseTable>
                        */}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>

    );
}

export function TableHead(props) {
    return <BaseTableRow {...props} />;
}

export function TableRow(props) {
    return <Box  {...props} style={[styles.row, props.isLast ? {borderBottomWidth: 0} : {}]}/>;
}

export function TableCell(props) {

    const textStyles = {
        ...styles.text,
        textAlign: props.align ?? styles.text.textAlign
    }

    return <BaseTableCell
        {...props}
        data={props.children}
        textStyle={textStyles}
    />;
}

export function TableBody(props) {
    return <BaseTableBody {...props} />;
}

const styles = StyleSheet.create({
    container: {backgroundColor: '#fff'},
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    header: {
        // height: 50,
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        paddingVertical: AppTheme.spacing.s,
        borderBottomColor: AppTheme.colors.greyLight
    },
    text: {textAlign: 'left', fontWeight: '100'},
    dataWrapper: {marginTop: -1},
    row: {
        // height: 40,
        borderBottomWidth: 1,
        paddingVertical: AppTheme.spacing.m,
        borderBottomColor: AppTheme.colors.greyLight,
        backgroundColor: '#fff',
        flexDirection: 'row',
    }
});