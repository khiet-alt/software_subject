import React, { useState } from 'react';
import './RoomInfor.scss';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function RoomInfor() {
  const { click, setClick } = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='FirstNavbar'>
        <div className="navbar">
          <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
              ROOM LIST <i class="fab fa-affiliatetheme"></i>
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
        {/* <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> */}
        <div>
          <form>
            <h2>Choose type room</h2>
            <div id='i1'>
              <input name="loaiphong" type="radio" />Room type A
            </div>
            <div id='i2'>
              <input name="loaiphong" type="radio" />Room type B
            </div>
            <div id='i3'>
              <input name="loaiphong" type="radio" />Room type C
            </div>
          </form>
        </div>
      </nav>
      <div id='i4'>
        Booking date <input type="date" name="" value="LoveHTML" />
      </div>
      <div class="w3-container">
        <h1>Room Information detail</h1>
        <div class="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
          <h2>Name room : I31</h2>
          <p>Floor : 3</p>
          <label>Room price : </label>
          <input class="w3-input w3-border" type="text" placeholder="300.000 VND" />
          <label>Status : </label>
          <input class="w3-input w3-border" type="text" placeholder="empty room" />
          <button type="button" class="w3-button w3-red w3-margin-top">Booking</button>
        </div>
      </div>
    </>
  )
}

export default RoomInfor                      