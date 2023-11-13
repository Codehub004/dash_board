import React from 'react'
import "./Invoices.css";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Older',
    uv: 400,
    pv: 200,
    amt: 4400,
  },
  {
    name: 'jan 01-08',
    uv: 600,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '09-16',
    uv: 1000,
    pv: 800,
    amt: 2290,
  },
  {
    name: '17-24',
    uv: 800,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '25-31',
    uv: 590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Future',
    uv: 390,
    pv: 3800,
    amt: 2500,
  },
  
];

const Invoices = () => {
  return (
    <div className='invoice'>
      <div className='top'>
        <div className="invoiceleft">
        <span className='title'>Invoices owed to you</span>
        </div>
        <div className="invoiceright">
         <button className='button'>New sales Invoice</button>
        </div>
        </div>
        <hr className='hello2' />
        <ResponsiveContainer width="100%" height="80%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill=" rgb(24, 190, 66)" />
        </BarChart>
      </ResponsiveContainer>


    

        </div>
  )
}

export default Invoices