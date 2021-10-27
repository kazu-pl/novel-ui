import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import BarChart, { BarChartProps } from "../../src/charts/BarChart";

export default {
  title: "Charts/BarChart",
  component: BarChart,
} as Meta;

const Template: Story<BarChartProps> = (args) => (
  <div style={{ maxWidth: 700 }}>
    <BarChart {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  options: {
    plugins: {
      title: {
        display: true,
        text: "Your purchase history",
      },
      legend: {
        display: false, // disables labels of datasets
      },
    },
  },
  data: {
    labels: ["January", "February", "March", "April", "June", "July"],
    datasets: [
      {
        label: "dataset 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
} as BarChartProps;

// ------------------------

export const MultipleBarsInColumn = Template.bind({});
MultipleBarsInColumn.args = {
  data: {
    labels: ["January", "February", "March", "April", "June", "July"],
    datasets: [
      {
        label: "item 1",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "item 2",
        data: [10, 9, 2, 1, 9, 13],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "item 3",
        data: [15, 19, 5, 3, 0, 0],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        text: "custom",
      },
    },
  },
} as BarChartProps;

export const custom = Template.bind({});
custom.args = {
  data: {
    labels: ["Products"],
    datasets: [
      {
        label: "item 1",
        data: [12],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
      },
      {
        label: "item 2",
        data: [19],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "item 3",
        data: [3],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
      {
        label: "item 4",
        data: [10],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  },
} as BarChartProps;
