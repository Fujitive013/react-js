import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

function Sidebar() {
  return (
    <div className="flex-none w-1/5 overflow-y-auto bg-blackish border-r-2 border-gray-500 flex flex-col justify-between">
      <div className="w-full text-white pt-1 mt-7 border-gray-500">
        <ul>
          <li className="py-1 pl-5 border-gray-600 border-b-2">
          <NavLink
              to="/admin"
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'transparent',
                color: isActive ? 'black' : 'white',
              })}
            >Admin</NavLink>
          </li>
          <li className="py-1 pl-5 border-b-2 border-gray-600">
          <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'transparent',
                color: isActive ? 'black' : 'white',
              })}
            >Dashboard</NavLink>
          </li>
          <li className="py-1 pl-5 mb-7 border-b-2 border-gray-600">
          <NavLink
              to="/students"
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'white' : 'transparent',
                color: isActive ? 'black' : 'white',
              })}
            >Students</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-full text-white pt-1 border-b-2 border-gray-500">
        <ul>
          <li className="py-1 pl-5"><NavLink to="/help">Help</NavLink></li>
          <li className="py-1 pl-5"><NavLink to="/about">About Us</NavLink></li>
          <li className="py-1 pl-5 mb-7"><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
