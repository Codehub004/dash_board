import React from 'react'
import "./Navbar.css";
import { ExpandMore, NotificationAdd, Search } from '@mui/icons-material';

const Navbar = () => {

  const divStyle = {
    border: 'none', // Set the border to none
    outline: 'none',
    
  }; 

  return (
    <div className='navbar'>
        <div className='wrapper'>
          <div className="search">
            <Search />
            <input style={divStyle} type="text" />
            </div>
        <div className='items'>
        <div className='item'>
        <NotificationAdd className='icon'/>
        <div className='dot'>.</div>
        </div>
        <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        <div className='item'>
          <ExpandMore className='icon'/>
        </div>

        </div>
        </div>
        </div>
  )
}

export default Navbar