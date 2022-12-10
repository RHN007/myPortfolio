import React from 'react';


const About = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Currently, I am working as an assistant manager at Geeky Social Limited as an accountant. Despite having experience as an accountant and in sales profession, I wanted to be a web developer because of my interest. I believe my adaptability and quick learning skill; I can adapt to any situation. During working as sales personnel, I have managed roughly thirty people directly which enhance my team leading skills which can help to work with team and bringing a positive energy the team I will be working. 

My good personality, positive attitude and excellent communication skills help me stand out from other applicants. I believe in being a team player and have the ability to follow directions or to lead the team to ensure the projects are handled professionally.</p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
    );
};

export default About;