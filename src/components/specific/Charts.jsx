import React from 'react'
import {Line, Doughnut} from "react-chartjs-2"
import {  Chart as ChartJS,
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend,
    plugins,
    scales,
 } from 'chart.js';
import { Grid } from '@mui/material';
import { BorderColor } from '@mui/icons-material';
import { orange, purple, purpleLight } from '../../constants/color';
import { getLast7Days } from '../../lib/features';

ChartJS.register(
    Tooltip,
    Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Legend
);

const labels= getLast7Days()

const LineChartOption ={
    responsive:true,
    plugins:{
        legend:{
            display:false,
        },
        title:{
            display:false,
        }
    },
    scales:{
        x:{
            grid:{
                display:false,
            },
        },
        y:{
            beginAtZero:true,
            grid:{
                display:false,
            },
        },
    },
};

const LineChart = ({value=[]}) => {
    const data={
        labels,
        datasets:[{
            data:value,
            label:"Revenue",
            fill:true,
            backgroundColor:purpleLight,
            borderColor:purple,
        },
        // {
        //     data:[10,20,34,25,50,],
        //     label:"Revenue 2",
        //     fill:true,
        //     backgroundColor:"rgba(175,192,192,0.5)",
        //     borderColor:purple,
        // },
    ],

    }
  return (
    <Line  data={data} options={LineChartOption} />
  )
};

const doughnutChartOption ={
   responsive:true,
   plugins:{
    legend:{
        display:false,
    },
    title:{
        display:false,
    },
   },
   cutout:120,
};

const DoughnutChart= ( {value=[],labels=[]}) =>{
    const data={
        labels,
        datasets:[{
            data:value,
            fill:true,
            backgroundColor:[purpleLight,orange],
            hoverBackgroundColor:[purple,orange],
            borderColor:[purple,orange],
            offset:20,
        },
       
    ]
}
    return <Doughnut style={{zIndex:10}} data={data} options={doughnutChartOption} />
}

export {LineChart,DoughnutChart}