import { Line } from "react-chartjs-2";
import React from "react";

const data = {
    labels: ["day1", "day2", "day3"],
    datasets: [
        {
            data: [],

            // labels.map(() =>
            //     faker.datatype.number({ min: -1000, max: 1000 })
            // ),

            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

function MainLineChart() {
    return (
        <div>
            <h1>Line Chart</h1>
            <Line data={data} />
        </div>
    );
}

export default MainLineChart;
