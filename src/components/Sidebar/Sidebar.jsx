import React from 'react'

import "./Sidebar.css";
import { AccountBalanceWallet, AttachMoney, Contacts, Dashboard, Description, Person, Token } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
         <Token className='token' />
          <span className='logo'>ASSIDUUS</span>
          </div>
         
        <div className='center'>
          <ul className='list'>
            <li className='item1'>
               <Dashboard className='icon'/>
              <span>Dashboard</span>
            </li>
            <li className='item'>
              <AccountBalanceWallet className='icon'/>
              <span>Accounts</span>
            </li>
            <li className='item'>
              <AttachMoney className='icon'/>
              <span>Payroll</span>
            </li>
            <li className='item'>
              <Description className='icon'/>
              <span>Reports</span>
            </li>
            <li className='item'>
              <Person className='icon'/>
              <span>Advisor</span>
            </li>
            <li className='item'>
              <Contacts className='icon'/>
              <span>Contacts</span>
            </li>
          </ul>
        </div>
        </div>
  )
}

export default Sidebar