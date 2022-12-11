import React, { useEffect, useState } from 'react';
import SingleProject from './SingleProject';

const Projects = () => {

    const [projects , setProjects] = useState([])

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])


    return (
        <div>
            <h1 className='text-accent text-4xl text-center mt-5 mb-5 font-bold'> Projects</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
                projects?.map(project => <SingleProject key={project._id} project={project} ></SingleProject> )
            }
          </div>
        </div>
    );
};

export default Projects;