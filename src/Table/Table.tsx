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
import TableLoadingPaper from "./TableLoadingSpinner";

export type SortDirection = "asc" | "desc";

export interface ColumnType<T> {
  title: React.ReactNode;
  /**
   * specifies what key should column render
   */
  render: (row: T, index: number) => React.ReactNode;
  /**
   * `key` is the column key and is used in pagination. If you change sort direction or sortBy then `key` will be the value of `sortBy`
   */
  key: string;
  /**
   * `isSortable` means that you can sort table data by the column `key` prop and the column has arrow if table data is sorted by the column
   */
  isSortable?: boolean;
  /**
   * `noWrap` means that column has no width (useful for last column with action buttons if you don't want that column to be too wide)
   *
   * `noWrap` sets `width` attribute of `th` html tag under the hood, the same thing does `width` key . `noWrap` takes priority over `width` key
   */
  noWrap?: boolean;
  isHidden?: boolean;
  /**
   * Set `width` attribute of `th` html tag.
   *
   * Keep in mind that if you set both `width` and `noWrap` then `width` will be ignored and `noWrap` will take priority
   */
  width?: number | string;
}

export interface TableProps<T> {
  /**
   * specifies whether data for table is fetching. If so, paper with cirtulacPrgress will be dispalyed on top of the table and interaction with it will be blocked.
   */
  isLoading?: boolean;
  data: T[];
  columns: ColumnType<T>[];
  tableName?: string;
  noDataText?: string;
  /**
   * specifies whether table allows you to select rows (for example to delete some of them or take another action) or not
   */
  isSelectable?: boolean;
  /**
   * it's a function that renders items/buttons (icons) that will show when you select some data
   */
  iconsToManageSelectedData?: (selectedItems: T[]) => React.ReactNode;

  /**
   * function that receives currently selected items number and returns text to display
   * @example
   * (selectedItemsLength)=> `${selectedItemsLength} items selected` // selectedItemsLength will be e.g. 5
   */
  selectedItemsText?: (selectedItemsLength: number) => string;
  /**
   * `filters` are items that will show above column titles but under filter icon. You can put `<select>` and so on
   */
  filters?: React.ReactNode;
  /**
   * Specify if `filters` are visible initially - useful when you want to e.g. show filters bar with search input when there's `search` query in url and you just refreshed the page so you want to not only `search` in url but also the actual search that changes it
   */
  isFiltersBarVisibleInitially?: boolean;
  /**
   * list of number avaliable to choose if you want to change rows visible at once.
   * @example
   * [10,25,50]
   */
  rowsPerPageOptions?: number[];
  pagination?: {
    pageSize: number;
    /**
     * `totalItems` stands for all items in total, even those you don't see in your table right now (but you will see if change page)
     */
    totalItems: number;
    currentPage: number;
  };
  /**
   * If your API sends back you data starting on page 0 (page 0 contains items e.g. 1-10 and page 1 contains items 11-20 and so on)
   *
   * AND YOU KEEP `pagination.currentPage` INITIALLY AS 0 - pass this option to correctly set changing page feature
   */
  paginationStartsAtZeroPage?: boolean;
  sort?: {
    sortBy: string;
    sortDirection: SortDirection;
  };
  onChangePage?: (page: number) => void;
  onChangeRowsPerPage?: (rowsPerPage: number) => void;
  onChangeSort?: (sortingProperty: string, direction: SortDirection) => void;
  /**
   * The text that is visible to the left from number of page size (page size number is changed via `rowsPerPageOptions` prop).
   *
   * Default value: `Rows per page:`
   */
  rowsPerPageText?: string;
}

export default function EnhancedTable<T>({
  isLoading,
  columns,
  data,
  tableName,
  noDataText = "No data",
  isSelectable,
  iconsToManageSelectedData,
  selectedItemsText = (items) => `${items} items selected`,
  filters,
  isFiltersBarVisibleInitially = false,
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
  const [isFiltersBarVisible, setIsFiltersBarVisible] = useState(
    isFiltersBarVisibleInitially
  );

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
    <Box sx={{ width: "100%", position: "relative" }}>
      {isLoading && <TableLoadingPaper />}
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
              {selectedItemsText(selectedItemsIndexes.length)}
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
                    // a) below `width` will be added as html attribute but if you give it let's say 600px but the content in the column will be max 400px then the column won't grow  to 600px because it's content is too small
                    width={column.noWrap ? "1px" : column.width || undefined} // setting `width` html prop does nothing when also setting `minWidth` via `style`?
                    // b) that's why I add below `minWidth` style which will force the column to grow to the given width (in our example 600px). Also notice that `width` style won't work, it has to be `minWidth`
                    style={
                      column.width
                        ? {
                            minWidth: column.width,
                          }
                        : undefined
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
                      <TableCell key={column.key || columnIndex}>
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
            onPageChange={(event, page) =>
              paginationStartsAtZeroPage
                ? onChangePage(page)
                : onChangePage(page + 1)
            }
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage={rowsPerPageText}
          />
        )}
      </Paper>
    </Box>
  );
}
