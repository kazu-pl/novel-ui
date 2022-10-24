/// <reference types="react" />
export declare type SortDirection = "asc" | "desc";
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
export default function EnhancedTable<T>({ isLoading, columns, data, tableName, noDataText, isSelectable, iconsToManageSelectedData, selectedItemsText, filters, isFiltersBarVisibleInitially, rowsPerPageOptions, pagination, paginationStartsAtZeroPage, sort, onChangePage, onChangeRowsPerPage, rowsPerPageText, onChangeSort, }: TableProps<T>): JSX.Element;
