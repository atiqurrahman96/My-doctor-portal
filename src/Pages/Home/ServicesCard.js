import React from 'react';

const ServicesCard = ({ service }) => {
    const { _id, name, img, description } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">

            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ServicesCard;