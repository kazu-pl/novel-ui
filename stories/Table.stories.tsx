import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Button from "../src/buttons/Button";
import Box from "@mui/material/Box";

import { ArgType } from "../types/storybookArgs";

import Table, { TableProps, SortDirection } from "../src/Table";
import { useCallback, useEffect, useState } from "@storybook/addons";

export default {
  title: "Table/Table",
  component: Table,
  argTypes: {} as ArgType<TableProps<Data>>,
} as Meta;

const Template: Story<TableProps<Data>> = (args) => <Table {...args} />;

interface Data {
  id: string;
  title: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const allItems: Data[] = [
  {
    id: "0000-0000-0000-0000",
    title: "apple",
    calories: 156,
    fat: 5,
    carbs: 20,
    protein: 45,
  },
  {
    id: "0000-0000-0000-0001",
    title: "pear",
    calories: 15,
    fat: 53,
    carbs: 210,
    protein: 425,
  },
  {
    id: "0000-0000-0000-0002",
    title: "peach",
    calories: 15,
    fat: 76,
    carbs: 16,
    protein: 68,
  },
  {
    id: "0000-0000-0000-0003",
    title: "radisch",
    calories: 23,
    fat: 7,
    carbs: 12,
    protein: 8,
  },
  {
    id: "0000-0000-0000-0004",
    title: "banana",
    calories: 120,
    fat: 1,
    carbs: 80,
    protein: 12,
  },
  {
    id: "0000-0000-0000-0005",
    title: "salmon",
    calories: 15,
    fat: 76,
    carbs: 16,
    protein: 68,
  },
  {
    id: "0000-0000-0000-0006",
    title: "tuna",
    calories: 23,
    fat: 7,
    carbs: 12,
    protein: 8,
  },
  {
    id: "0000-0000-0000-0007",
    title: "beetroot",
    calories: 120,
    fat: 1,
    carbs: 80,
    protein: 12,
  },
];

export const Basic = Template.bind({});
Basic.args = {
  data: allItems.slice(0, 5),
  columns: [
    {
      title: "No.",
      render: (row, index) => index + 1,
      key: "desert",
    },
    {
      title: "Calories",
      isSortable: true,
      render: (row, index) => row.calories,
      key: "calories",
    },
    {
      title: "Fat (g)",
      isSortable: true,
      render: (row, index) => row.fat,
      key: "fat",
    },
    {
      title: "Carbs (g)",
      isSortable: true,
      render: (row, index) => row.carbs,
      key: "carbs",
    },
    {
      title: "Protein (g)",
      isSortable: false,
      render: (row, index) => row.protein,
      key: "protein",
      noWrap: true,
    },
  ],
  tableName: "Nutrions",
  selectedItemsText: (selectedItemsText) => `${selectedItemsText} zaznaczono`,
  iconsToManageSelectedData: () => (
    <>
      <Tooltip title="Edit item(s)">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete Item(s)">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </>
  ),
  filters: (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex">
        <Button variant="contained">filter option 1</Button>
        <Box pl={2}>
          <Button variant="contained">filter option 2</Button>
        </Box>
      </Box>
      <Box>
        <Button variant="contained">Filter</Button>
      </Box>
    </Box>
  ),
  pagination: {
    currentPage: 1,
    pageSize: 5,
    totalItems: 10,
  },
  sort: {
    sortBy: "",
    sortDirection: "asc",
  },
  onChangePage: () => {},
  onChangeRowsPerPage: () => {},
  onChangeSort: () => {},
} as TableProps<Data>;

export const WithNoData = Template.bind({});
WithNoData.args = {
  data: [],
  tableName: "Table Name",
  noDataText: "No Data",
  columns: [
    {
      title: "Desset (100g serving)",
      render: (row, index) => row.title,
      key: "desert",
    },
    {
      title: "Calories",
      isSortable: true,
      render: (row, index) => row.calories,
      key: "calories",
    },
    {
      title: "Fat (g)",
      isSortable: true,
      render: (row, index) => row.fat,
      key: "fat",
    },
    {
      title: "Carbs (g)",
      isSortable: true,
      render: (row, index) => row.carbs,
      key: "carbs",
    },
    {
      title: "Protein (g)",
      isSortable: false,
      render: (row, index) => row.protein,
      key: "protein",
      noWrap: true,
    },
  ],
} as TableProps<Data>;

const fetchTableData = ({
  currentPage,
  pageSize,
  sortBy,
  sortDirection,
}: {
  sortBy: string;
  sortDirection: SortDirection;
  currentPage: number;
  pageSize: number;
}) => {
  const sortedData = allItems.sort((a, b) =>
    sortDirection === "desc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
  );
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const slicedSortedData = sortedData.slice(startIndex, endIndex);

  return new Promise<Data[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(slicedSortedData);
    }, 300);
  });
};

export const WorkingTable = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 5,
    totalItems: allItems.length,
  });
  const [sort, setSort] = useState({
    sortBy: "calories",
    sortDirection: "asc" as SortDirection,
  });

  const handleOnChangePage = (page: number) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  const onChangeRowsPerPage = (rowsPerPage: number) => {
    setPagination((prev) => ({ ...prev, pageSize: rowsPerPage }));
  };

  const onChangeSort = (sortingProperty: string, direction: SortDirection) => {
    setSort((prev) => ({
      ...prev,
      sortBy: sortingProperty,
      sortDirection: direction,
    }));
  };

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchTableData({
        currentPage: pagination.currentPage,
        pageSize: pagination.pageSize,
        sortBy: sort.sortBy,
        sortDirection: sort.sortDirection,
      });
      setData(data);
    } catch (err) {}
  }, [
    pagination.currentPage,
    pagination.pageSize,
    sort.sortBy,
    sort.sortDirection,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelectedItems = (selectedItems: Data[]) => {
    alert(`Selected Item(s): ${JSON.stringify(selectedItems)}`);
  };

  return (
    <>
      <Table
        data={data}
        isSelectable
        columns={[
          {
            title: "Desset (100g serving)",
            render: (row, index) => row.title,
            key: "desert",
          },
          {
            title: "Calories",
            isSortable: true,
            render: (row, index) => row.calories,
            key: "calories",
          },
          {
            title: "Fat (g)",
            isSortable: true,
            render: (row, index) => row.fat,
            key: "fat",
          },
          {
            title: "Carbs (g)",
            isSortable: true,
            render: (row, index) => row.carbs,
            key: "carbs",
          },
          {
            title: "Protein (g)",
            isSortable: false,
            render: (row, index) => row.protein,
            key: "protein",
            noWrap: true,
          },
        ]}
        tableName="Nutrients"
        selectedItemsText={(selectedItemsNumber) =>
          `${selectedItemsNumber} zaznaczono`
        }
        iconsToManageSelectedData={(selectedItems) => (
          <>
            <Tooltip title="Edit item(s)">
              <IconButton onClick={() => handleSelectedItems(selectedItems)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Item(s)">
              <IconButton onClick={() => handleSelectedItems(selectedItems)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </>
        )}
        filters={
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex">
              <Button variant="contained">filter option 1</Button>
              <Box pl={2}>
                <Button variant="contained">filter option 2</Button>
              </Box>
            </Box>
            <Box>
              <Button variant="contained">Filter</Button>
            </Box>
          </Box>
        }
        pagination={pagination}
        sort={sort}
        onChangePage={handleOnChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangeSort={onChangeSort}
      />
    </>
  );
};
