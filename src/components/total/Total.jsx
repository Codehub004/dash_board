import React from 'react'
import "./Total.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'August',
    uv: 500,
    pv: 200,
    amt: 4400,
  },
  {
    name: 'September',
    uv: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'October',
    uv: 1050,
    pv: 800,
    amt: 2290,
  },
  {
    name: 'November',
    uv: 850,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'December',
    uv: 690,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'January',
    uv: 1100,
    pv: 3800,
    amt: 2500,
  },
  
];

const Total = () => {
  return (
    <div className='total'>
        <div className='top'>

          <div className='totalleft'>
          <span className='title'>Total cash flow</span>
           </div>

           <div className='totalright'>
             <div className='right1'>
            <button className='button1'></button>
            <p>In</p>
            </div>   

            <div className='right2'>
            <button className='button1'></button>
            <p>Out</p>
            </div>
           </div>
           <div />
           </div>
           <hr className='hello3' />
               <ResponsiveContainer width="100%" height="80%">
               <BarChart width={150} height={40} data={data} >
               <Bar dataKey="uv" fill=" rgb(24, 190, 66)" />
               </BarChart>
               </ResponsiveContainer>
               
       
     </div>
  )
}

export default Total