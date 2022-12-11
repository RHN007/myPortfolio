import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';
import ContactMe from './ContactMe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;