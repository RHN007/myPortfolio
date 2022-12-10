import { Button } from '@mui/material';
import React from 'react';
import banner from '../../assets/images/Programming.gif';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Welcome To
 <span className='text-accent'> RHN007</span>  World! </h1>
                    <p className="py-5 text-gray-500">While building web pages, I gained substantial experience identifying and fixing bugs, as well as coding for react application, learnt mongo Db and express JS for backend and also used few popular CSS frameworks like bootstrap, tailwind CSS and material UI. I have done more than 10 projects within the last 6 months and continuously develop those projects.  </p>
                    <Button variant="contained">Hire Me</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;