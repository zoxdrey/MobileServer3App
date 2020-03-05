import React from 'react';

export default function SideMenu() {

    function handleClick(e) {
        console.log('По ссылке кликнули.');
      }

    return (<div>
       <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">
         <img src="https://via.placeholder.com/200x150" className="card-img-top" alt="..." /> </div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action bg-light" onClick={handleClick}>Dashboard</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
        <a href="#" className="list-group-item list-group-item-action bg-light" style={{height: '100%'}}> </a>
      </div>
    </div>

    </div>)
}