import BaseTable from '@mui/material/Table';
import BaseTableBody from '@mui/material/TableBody';
import BaseTableCell from '@mui/material/TableCell';
import BaseTableContainer from '@mui/material/TableContainer';
import BaseTableHead from '@mui/material/TableHead';
import BaseTableRow from '@mui/material/TableRow';
import React from 'react';
import AppTheme, { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { TableProps } from '@main-components/Base/Table/TableProps';
import { Card } from '@main-components/Base/Card';
import { styled } from '@mui/system';
import { Box } from '@main-components/Base/Box';

const EnhancedTable = styled(BaseTable)`
    & td, th {
        font-size: ${AppTheme.textVariants.body1.fontSize}px;
        font-family: ${AppTheme.textVariants.body.fontFamily};
        color: ${AppTheme.colors[AppTheme.textVariants.body.color]}
    }

    & .MuiTableHead-root {

        & .MuiTableCell-head {
            font-weight: bold;
        }
    }

    & .MuiTableBody-root {
        & .MuiTableRow-root:last-child {
            & td, th {
                border-bottom-width: 0;
            }
        }
    }
`;

export function Table(props: TableProps) {
    const theme = useTheme();
    return (
            <BaseTableContainer component={props.BaseComponent ?? Card}>
                <EnhancedTable
                        style={{
                            fontFamily: theme.textVariants.body.fontFamily
                        }}
                >{props.children}</EnhancedTable>
            </BaseTableContainer>
    );
}

export function TableHead(props) {
    return <BaseTableHead {...props} />;
}

export function TableRow(props) {
    return <BaseTableRow {...props} />;
}

export function TableCell(props) {
    return <BaseTableCell {...props} />;
}

export function TableBody(props) {
    return <BaseTableBody {...props} />;
}

export function TableContainer({ children }) {
    return (
            <Box
                    borderRadius={20}
                    bg={'greyLight'}
                    p={'m'}
            >
                {children}

            </Box>
    );
}