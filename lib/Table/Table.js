import { a as __assign, e as __spreadArray } from '../tslib.es6-905b4068.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

function EnhancedTable(_a) {
    var columns = _a.columns, data = _a.data, tableName = _a.tableName, _b = _a.noDataText, noDataText = _b === void 0 ? "No data" : _b, isSelectable = _a.isSelectable, iconsToManageSelectedData = _a.iconsToManageSelectedData, _c = _a.selectedItemsText, selectedItemsText = _c === void 0 ? "items selected" : _c, filters = _a.filters, _d = _a.rowsPerPageOptions, rowsPerPageOptions = _d === void 0 ? [5, 10, 25] : _d, pagination = _a.pagination, sort = _a.sort, _e = _a.onChangePage, onChangePage = _e === void 0 ? function () { } : _e, _f = _a.onChangeRowsPerPage, onChangeRowsPerPage = _f === void 0 ? function () { } : _f, _g = _a.rowsPerPageText, rowsPerPageText = _g === void 0 ? "Rows per page:" : _g, _h = _a.onChangeSort, onChangeSort = _h === void 0 ? function () { } : _h;
    var _j = useState([]), selectedItemsIndexes = _j[0], setSelectedItemsIndexes = _j[1];
    var _k = useState(false), isFiltersBarVisible = _k[0], setIsFiltersBarVisible = _k[1];
    var handleRequestSort = function (sortingProperty) {
        var isAsc = (sort === null || sort === void 0 ? void 0 : sort.sortBy) === sortingProperty && sort.sortDirection === "asc";
        onChangeSort(sortingProperty, isAsc ? "desc" : "asc");
    };
    var handleSelectAllClick = function (event) {
        if (event.target.checked) {
            var newSelecteds = data.map(function (_, index) { return index; });
            setSelectedItemsIndexes(newSelecteds);
            return;
        }
        setSelectedItemsIndexes([]);
    };
    var handleChangeRowsPerPage = function (event) {
        onChangeRowsPerPage(parseInt(event.target.value, 10));
        onChangePage(1);
    };
    var handleSelectRow = function (selectedRowIndex) {
        return selectedItemsIndexes.includes(selectedRowIndex)
            ? setSelectedItemsIndexes(selectedItemsIndexes.filter(function (item) { return item !== selectedRowIndex; }))
            : setSelectedItemsIndexes(__spreadArray(__spreadArray([], selectedItemsIndexes, true), [selectedRowIndex], false));
    };
    return (jsx(Box, __assign({ sx: { width: "100%" } }, { children: jsxs(Paper, __assign({ sx: { width: "100%", mb: 2 } }, { children: [jsxs(Toolbar, __assign({ sx: __assign({ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }, (selectedItemsIndexes.length > 0 && {
                        bgcolor: function (theme) {
                            return alpha(theme.palette.primary.light, theme.palette.action.activatedOpacity);
                        },
                    })) }, { children: [selectedItemsIndexes.length > 0 ? (jsx(Typography, __assign({ sx: { flex: "1 1 100%" } }, { children: " " + selectedItemsIndexes.length + " " + selectedItemsText }), void 0)) : (jsx(Typography, __assign({ sx: { flex: "1 1 100%" }, variant: "h6" }, { children: tableName }), void 0)), selectedItemsIndexes.length > 0 ? (iconsToManageSelectedData &&
                            iconsToManageSelectedData(data.filter(function (_, index) { return selectedItemsIndexes.includes(index); }))) : (jsx(IconButton, __assign({ onClick: filters
                                ? function () { return setIsFiltersBarVisible(function (prev) { return !prev; }); }
                                : undefined }, { children: jsx(FilterListIcon, {}, void 0) }), void 0))] }), void 0), filters && isFiltersBarVisible && jsx(Box, __assign({ p: 2 }, { children: filters }), void 0), jsx(TableContainer, { children: jsxs(Table, __assign({ sx: { minWidth: 750 }, size: "medium" }, { children: [jsx(TableHead, { children: jsxs(TableRow, { children: [isSelectable && (jsx(TableCell, __assign({ padding: "checkbox" }, { children: jsx(Checkbox, { color: "primary", indeterminate: selectedItemsIndexes.length > 0 &&
                                                    selectedItemsIndexes.length < data.length, checked: data.length > 0 &&
                                                    selectedItemsIndexes.length === data.length, onChange: handleSelectAllClick, inputProps: {
                                                    "aria-label": "select all items",
                                                } }, void 0) }), void 0)), columns.map(function (column, columnIndex) { return (jsx(TableCell, __assign({ sortDirection: (sort === null || sort === void 0 ? void 0 : sort.sortBy) === column.key ? sort === null || sort === void 0 ? void 0 : sort.sortDirection : false }, { children: column.isSortable ? (jsx(Fragment, { children: jsx(TableSortLabel, __assign({ active: (sort === null || sort === void 0 ? void 0 : sort.sortBy) === column.key, direction: (sort === null || sort === void 0 ? void 0 : sort.sortBy) === column.key
                                                        ? sort === null || sort === void 0 ? void 0 : sort.sortDirection
                                                        : "asc", onClick: function () { return handleRequestSort(column.key); } }, { children: column.title }), void 0) }, void 0)) : (jsx("span", { children: column.title }, void 0)) }), columnIndex)); })] }, void 0) }, void 0), jsxs(TableBody, { children: [data.map(function (row, rowIndex) {
                                        var isItemSelected = selectedItemsIndexes.includes(rowIndex);
                                        return (jsxs(TableRow, __assign({ hover: true, tabIndex: -1, selected: isItemSelected }, { children: [isSelectable && (jsx(TableCell, __assign({ padding: "checkbox" }, { children: jsx(Checkbox, { color: "primary", checked: isItemSelected, inputProps: {
                                                            "aria-labelledby": "enhanced-table-checkbox-" + rowIndex,
                                                        }, onChange: function () { return handleSelectRow(rowIndex); } }, void 0) }), void 0)), columns.map(function (column, columnIndex) { return (jsx(TableCell, __assign({ width: column.noWrap ? "1px" : undefined }, { children: column.render(row, rowIndex) }), column.key || columnIndex)); })] }), rowIndex));
                                    }), data.length === 0 && (jsx(TableRow, { children: jsx(TableCell, __assign({ colSpan: isSelectable ? columns.length + 1 : columns.length, align: "center" }, { children: noDataText }), void 0) }, void 0))] }, void 0)] }), void 0) }, void 0), pagination && (jsx(TablePagination, { rowsPerPageOptions: rowsPerPageOptions, component: "div", count: pagination.totalItems, rowsPerPage: pagination.pageSize, page: pagination.currentPage - 1, onPageChange: function (event, page) { return onChangePage(page + 1); }, onRowsPerPageChange: handleChangeRowsPerPage, labelRowsPerPage: rowsPerPageText }, void 0))] }), void 0) }), void 0));
}

export { EnhancedTable as default };
