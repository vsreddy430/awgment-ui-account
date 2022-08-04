import React from 'react';
import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}));

const useTable = (tableData, tableHeaders, fetchTableData) => {
    const classes = useStyles();
    const { rowsPerPageOptions, recordsCount, rowsPerPage, page, sortBy, sortDirection } = tableData;

    const TblContainer = (props) => (
        <Table size="small" className={classes.table}>
            {props.children}
        </Table>
    );

    const TblHead = () => {
        const handleSortRequest = async (cellId) => {
            const isAsc = sortBy === cellId && sortDirection === 'asc' ? 'desc' : 'asc';
            await fetchTableData(rowsPerPage, 1, cellId, isAsc);
        };

        return (
            <TableHead>
                <TableRow>
                    {tableHeaders.map((headCell) => (
                        <TableCell
                            key={headCell.id}
                            align={headCell.id === 'actions' ? 'right' : 'left'}
                            sortDirection={sortBy === headCell.id ? sortDirection : false}>
                            {headCell.disableSorting ? (
                                headCell.label
                            ) : (
                                <TableSortLabel
                                    active={sortBy === headCell.id}
                                    direction={sortBy === headCell.id ? sortDirection : 'asc'}
                                    onClick={() => {
                                        handleSortRequest(headCell.id);
                                    }}>
                                    {headCell.label}
                                </TableSortLabel>
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        );
    };

    const handleChangePage = async (_event, newPage) => {
        await fetchTableData(rowsPerPage, newPage + 1);
    };

    const handleChangeRowsPerPage = async (event) => {
        const selectedRowPerPage = parseInt(event.target.value, 10);
        await fetchTableData(selectedRowPerPage, 1);
    };

    const TblPagination = () => (
        <TablePagination
            component="div"
            page={page - 1}
            rowsPerPageOptions={rowsPerPageOptions || [5, 10, 25]}
            rowsPerPage={rowsPerPage || 5}
            count={recordsCount || 0}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );

    return {
        TblContainer,
        TblHead,
        TblPagination,
    };
};

export default useTable;
