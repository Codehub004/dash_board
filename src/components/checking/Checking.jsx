import React from 'react'
import "./Checking.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "09",
    uv: 4000,
    pv: 7000,
    amt: 4400,
  },
  {
    name: '10',
    uv: 3000,
    pv: 8398,
    amt: 2210,
  },
  {
    name: '11',
    uv: 4000,
    pv: 9000,
    amt: 4290,
  },
  {
    name: '12',
    uv: 2780,
    pv: 4908,
    amt: 2000,
  },
  {
    name: '13',
    uv: 1890,
    pv: 6800,
    amt: 2181,
  },
  {
    name: '14',
    uv: 2390,
    pv: 7800,
    amt: 2500,
  },
  {
    name: '15',
    uv: 3490,
    pv: 6300,
    amt: 2100,
  },
  {
    name: '16',
    uv: 3490,
    pv: 3300,
    amt: 2100,
  },
  {
    name: '17',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '18',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Checking = () => {
  return (
    <div className='checking'>
      <div className='top'>
        <div className="checkingleft">
        <span className='title'>Checking account</span>
        </div>
        <div className="checkingright">
        <select className='manage'>
         <option value="option1">manage</option>
        </select>
        <select className='january'>
         <option value="option1">January</option>
       </select>
         </div>
         </div>
          <hr className='hello1' />
         <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey="pv" stroke=" rgb(24, 190, 66)" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

</div>
  )
}

export default Checking