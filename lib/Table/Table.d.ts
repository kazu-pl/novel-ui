/// <reference types="react" />
export declare type SortDirection = "asc" | "desc";
export interface TableProps<T> {
    data: T[];
    columns: {
        title: string;
        render: (row: T, index: number) => React.ReactNode;
        key: string;
        isSortable?: boolean;
        noWrap?: boolean;
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
    sort?: {
        sortBy: string;
        sortDirection: SortDirection;
    };
    onChangePage?: (page: number) => void;
    onChangeRowsPerPage?: (rowsPerPage: number) => void;
    rowsPerPageText?: string;
    onChangeSort?: (sortingProperty: string, direction: SortDirection) => void;
}
export default function EnhancedTable<T>({ columns, data, tableName, noDataText, isSelectable, iconsToManageSelectedData, selectedItemsText, filters, rowsPerPageOptions, pagination, sort, onChangePage, onChangeRowsPerPage, rowsPerPageText, onChangeSort, }: TableProps<T>): JSX.Element;
