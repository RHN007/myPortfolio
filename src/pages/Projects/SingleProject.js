import React from 'react';

const SingleProject = ({project}) => {
    const {name, picture,description,technology,liveSite} = project
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{technology}</p>
          <div className="card-actions justify-end">
            <a  className='w-full' href={liveSite} target="_blank"><button className="btn btn-accent w-full">Live Site </button></a>
          </div>
        </div>
      </div>
    );
};

export default SingleProject;