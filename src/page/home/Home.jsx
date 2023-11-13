import React from 'react'
import "./home.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Checking from '../../components/checking/Checking';
import Invoices from '../../components/invoices/Invoices';
import Total from '../../components/total/Total';
import Account from '../../components/account/Account';

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />
         <div className="chart1">
           <Checking />
           <Invoices />
            </div>
            <div className="chart2">
              <Total />
              <Account />
            </div>
         
        </div>
    </div>
  )
}

export default Home