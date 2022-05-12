import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { _id, name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-primary font-bold">{name}</h2>
                <p>{
                    slots.length > 0 ?
                        <span>{slots[0]}</span> :
                        <span className='text-secondary'>No appointment available.Try another day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>

                <div class="card-actions justify-center">

                    <label for="booking-modal"

                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        class="btn btn-secondary btn-sm text-white uppercase bg-gradient-to-r from-secondary to-primary"
                    > Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default Service;
