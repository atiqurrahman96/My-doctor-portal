import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { _id, img, name, description, state } = testimonial;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">

                <p>{description}</p>
            </div>
            <div className='flex  items-center gap-2 px-2'>
                <div>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>

                </div>
                <div>
                    <p><span>{name}</span></p>
                    <p><span>{state}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;