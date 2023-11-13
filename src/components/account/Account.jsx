import React from 'react'
import "./Account.css";
const Account = () => {
  return (
    <div className='account'>
        <div className='top1'>
          <span className='logo1'>Account watchlist</span> 
        </div>
         <hr className='hello4'/>
       <div className='center1'>
        <div className='left2'>
          <span className='logo2'>Account</span>
          <ul className='item2'>
          <li className='product1'>
             Sales
          </li>
          <li className='product1'>
             Addvertising
          </li>
          <li className='product1'>
             Inventory
          </li>
          <li className='product1'>
             Entertainment
          </li>
          <li className='product1'>
             Product
          </li>
          </ul>
        </div>

        <div className='middle'>
          <span className='logo3'>This Month</span>
          <ul className='item3'>
            <li className='product2'>
              1,194.58
            </li>
            <li className='product2'>
              6,879.02
            </li>
            <li className='product2'>
              4,692.26
            </li>
            <li className='product2'>
            0.00
            </li>
            <li className='product2'>
              4,652.10
            </li>
        
          </ul>
        </div>

        <div className='last'>
          <span className='logo4'>YTD</span>
          <ul className='item4'>
            <li className='product3'>
            11,418.29
            </li>
            <li className='product3'>
            9,271.36
            </li>
            <li className='product3'>
            9,768.09
            </li>
            <li className='product3'>
              0.00
            </li>
            <li className='product3'>
             2,529.90
            </li>
          
          </ul>
        </div>

        </div> 
    </div>
  )
}

export default Account