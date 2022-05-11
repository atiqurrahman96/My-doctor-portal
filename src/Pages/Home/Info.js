import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info = () => {
    return (
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-3 m-2'>
            <InfoCard cardTitle="Opening Hours " bgClass="bg-gradient-to-r from-secondary to-primary" image={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" bgClass="bg-accent" image={marker}></InfoCard>
            <InfoCard cardTitle="Contact us" bgClass="bg-gradient-to-r from-secondary to-primary" image={phone}></InfoCard>
        </div>
    );
};

export default info;