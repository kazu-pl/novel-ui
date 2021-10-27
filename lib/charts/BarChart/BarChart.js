import { jsx, Fragment } from 'react/jsx-runtime';
import { Bar } from 'react-chartjs-2';

var BarChart = function (_a) {
    var data = _a.data, options = _a.options;
    return (jsx(Fragment, { children: jsx(Bar, { data: data, title: "TITLE", options: options || {
                plugins: {
                    title: {
                        display: true,
                        text: "Wanted Colors",
                    },
                    legend: {
                        display: false, // wyłącza labelki z datasetow z obiektu data
                    },
                },
            } }, void 0) }, void 0));
};

export { BarChart as default };
