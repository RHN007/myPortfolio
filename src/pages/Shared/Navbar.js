import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import resume from '../../assets/Md Rakibul Hassan Nayon-resume (1).pdf'

const Navbar = () => {

    const menu = <React.Fragment>
          <li><NavLink className='rounded-xl ' to="/">Home</NavLink></li>
        <li><NavLink className='rounded-xl' to="/about">About</NavLink></li>
        <li><NavLink className='rounded-xl' to="/projects">Projects</NavLink></li>
        <li><a className=" text-accent hover:bg-accent hover:text-black " alt="resume" href={resume} download>Download My Resume</a></li>
    </React.Fragment>


    return (
        <div className="navbar bg-sky-800 rounded  flex justify-between md:text-accent  uppercase font-bold sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">RHN007</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {menu}
    </ul>
  </div>

</div>
    );
};

export default Navbar;