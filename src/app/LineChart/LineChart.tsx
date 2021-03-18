import React from 'react'
import { ChartData, Line } from 'react-chartjs-2'
import * as chartjs from "chart.js";

interface IProps {
    label: string[],
    data: number[],
    chartLabel: string;
}

const LineChart = ({ data, label, chartLabel }: IProps) => {
    const chartData: ChartData<chartjs.ChartData> = {
        labels: [...label],
        datasets: [
            {
                label: chartLabel,
                data,
                fill: false,
                backgroundColor: '#FF0000',
                borderColor: '#FF6A6A',
            },
        ],
    }

    const options: chartjs.ChartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
            gridLines: {
                display: false,
                
            }
        }
    }
    return (
        <>
            <Line data={chartData} options={options} height={100} />
        </>
    )
}

export default LineChart;
