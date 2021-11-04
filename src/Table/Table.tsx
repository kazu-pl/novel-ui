import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";

export type SortDirection = "asc" | "desc";

export interface TableProps<T> {
  data: T[];
  columns: {
    title: string;
    render: (row: T, index: number) => React.ReactNode;
    key: string;
    isSortable?: boolean;
    noWrap?: boolean;
    isHidden?: boolean;
  }[];
  tableName?: string;
  noDataText?: string;
  isSelectable?: boolean;
  iconsToManageSelectedData?: (selectedItems: T[]) => React.ReactNode;
  selectedItemsText?: string;
  filters?: React.ReactNode;
  rowsPerPageOptions?: number[];
  pagination?: {
    pageSize: number;
    totalItems: number;
    currentPage: number;
  };
  paginationStartsAtZeroPage?: boolean;
  sort?: {
    sortBy: string;
    sortDirection: SortDirection;
  };
  onChangePage?: (page: number) => void;
  onChangeRowsPerPage?: (rowsPerPage: number) => void;
  rowsPerPageText?: string;
  onChangeSort?: (sortingProperty: string, direction: SortDirection) => void;
}

export default function EnhancedTable<T>({
  columns,
  data,
  tableName,
  noDataText = "No data",
  isSelectable,
  iconsToManageSelectedData,
  selectedItemsText = "items selected",
  filters,
  rowsPerPageOptions = [5, 10, 25],
  pagination,
  paginationStartsAtZeroPage,
  sort,
  onChangePage = () => {},
  onChangeRowsPerPage = () => {},
  rowsPerPageText = "Rows per page:",
  onChangeSort = () => {},
}: TableProps<T>) {
  const [selectedItemsIndexes, setSelectedItemsIndexes] = useState<number[]>(
    []
  );
  const [isFiltersBarVisible, setIsFiltersBarVisible] = useState(false);

  const visibleColumns = columns.filter((item) => !item.isHidden);

  const handleRequestSort = (sortingProperty: string) => {
    const isAsc =
      sort?.sortBy === sortingProperty && sort.sortDirection === "asc";
    onChangeSort(sortingProperty, isAsc ? "desc" : "asc");
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = data.map((_, index) => index);
      setSelectedItemsIndexes(newSelecteds);
      return;
    }
    setSelectedItemsIndexes([]);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChangeRowsPerPage(parseInt(event.target.value, 10));
    onChangePage(1);
  };

  const handleSelectRow = (selectedRowIndex: number) =>
    selectedItemsIndexes.includes(selectedRowIndex)
      ? setSelectedItemsIndexes(
          selectedItemsIndexes.filter((item) => item !== selectedRowIndex)
        )
      : setSelectedItemsIndexes([...selectedItemsIndexes, selectedRowIndex]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(selectedItemsIndexes.length > 0 && {
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.light,
                  theme.palette.action.activatedOpacity
                ),
            }),
          }}
        >
          {selectedItemsIndexes.length > 0 ? (
            <Typography sx={{ flex: "1 1 100%" }}>
              {` ${selectedItemsIndexes.length} ${selectedItemsText}`}
            </Typography>
          ) : (
            <Typography sx={{ flex: "1 1 100%" }} variant="h6">
              {tableName}
            </Typography>
          )}

          {selectedItemsIndexes.length > 0 &&
            iconsToManageSelectedData &&
            iconsToManageSelectedData(
              data.filter((_, index) => selectedItemsIndexes.includes(index))
            )}

          {selectedItemsIndexes.length === 0 && filters && (
            <IconButton
              onClick={
                filters
                  ? () => setIsFiltersBarVisible((prev) => !prev)
                  : undefined
              }
            >
              <FilterListIcon />
            </IconButton>
          )}
        </Toolbar>
        {filters && isFiltersBarVisible && <Box p={2}>{filters}</Box>}
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size="medium">
            <TableHead>
              <TableRow>
                {isSelectable && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      indeterminate={
                        selectedItemsIndexes.length > 0 &&
                        selectedItemsIndexes.length < data.length
                      }
                      checked={
                        data.length > 0 &&
                        selectedItemsIndexes.length === data.length
                      }
                      onChange={handleSelectAllClick}
                      inputProps={{
                        "aria-label": "select all items",
                      }}
                    />
                  </TableCell>
                )}

                {visibleColumns.map((column, columnIndex) => (
                  <TableCell
                    key={columnIndex}
                    sortDirection={
                      sort?.sortBy === column.key ? sort?.sortDirection : false
                    }
                  >
                    {column.isSortable ? (
                      <>
                        <TableSortLabel
                          active={sort?.sortBy === column.key}
                          direction={
                            sort?.sortBy === column.key
                              ? sort?.sortDirection
                              : "asc"
                          }
                          onClick={() => handleRequestSort(column.key)}
                        >
                          {column.title}
                        </TableSortLabel>
                      </>
                    ) : (
                      <span>{column.title}</span>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((row, rowIndex) => {
                const isItemSelected = selectedItemsIndexes.includes(rowIndex);

                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={rowIndex}
                    selected={isItemSelected}
                  >
                    {isSelectable && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": `enhanced-table-checkbox-${rowIndex}`,
                          }}
                          onChange={() => handleSelectRow(rowIndex)}
                        />
                      </TableCell>
                    )}

                    {visibleColumns.map((column, columnIndex) => (
                      <TableCell
                        key={column.key || columnIndex}
                        width={column.noWrap ? "1px" : undefined}
                      >
                        {column.render(row, rowIndex)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}

              {data.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={
                      isSelectable
                        ? visibleColumns.length + 1
                        : visibleColumns.length
                    }
                    align="center"
                  >
                    {noDataText}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {pagination && (
          <TablePagination
            rowsPerPageOptions={rowsPerPageOptions}
            component="div"
            count={pagination.totalItems}
            rowsPerPage={pagination.pageSize}
            page={
              paginationStartsAtZeroPage
                ? pagination.currentPage
                : pagination.currentPage - 1
            }
            onPageChange={(event, page) => onChangePage(page + 1)}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={rowsPerPageText}
          />
        )}
      </Paper>
    </Box>
  );
}
