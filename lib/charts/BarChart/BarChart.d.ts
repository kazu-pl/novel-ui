/// <reference types="react" />
import { ChartData, ChartOptions } from "chart.js";
export interface BarChartProps {
    /**
     * @todo THIS COMPONENT IS NOT FULLY READY YET.
     */
    data: ChartData;
    /**
     * @todo THIS COMPONENT IS NOT FULLY READY YET.
     */
    options?: ChartOptions;
}
declare const BarChart: ({ data, options }: BarChartProps) => JSX.Element;
export default BarChart;
