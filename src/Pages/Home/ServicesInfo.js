import React from 'react';
import ServicesCard from './ServicesCard';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
const ServicesInfo = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit vel inventore delectus eum exercitationem consectetur, eveniet illum possimus deserunt beatae tenetur facilis et. Ut id architecto iusto non minus!',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit vel inventore delectus eum exercitationem consectetur, eveniet illum possimus deserunt beatae tenetur facilis et. Ut id architecto iusto non minus!',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet reprehenderit vel inventore delectus eum exercitationem consectetur, eveniet illum possimus deserunt beatae tenetur facilis et. Ut id architecto iusto non minus!',
            img: whitening
        },
    ]
    return (

        <div>
            <div>
                <h1 className='text-center text-primary font-bold uppercase text-xl'>Services</h1>
                <h2 className='text-center text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    >
                    </ServicesCard>)
                }

            </div>
        </div>
    );
};

export default ServicesInfo;