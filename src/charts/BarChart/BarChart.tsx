import { Bar } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

export interface BarChartProps {
  data: ChartData;
  options?: ChartOptions;
}

const BarChart = ({ data, options }: BarChartProps) => {
  return (
    <>
      <Bar
        data={data}
        title="TITLE"
        options={
          options || {
            plugins: {
              title: {
                display: true,
                text: "Wanted Colors",
              },
              legend: {
                display: false, // wyłącza labelki z datasetow z obiektu data
              },
            },
          }
        }
      />
    </>
  );
};

export default BarChart;

// wyłączenie labelki dla tylko jednego koloru na górze:
// https://blog.logrocket.com/using-chart-js-react
// wyszukaj "We’ll be using the Bar component in this case:" i tam jest przykład kodu gdzie ktoś używa obiektu plugins w propie options i tak doszedłem do tego legend {dispaly: none}
