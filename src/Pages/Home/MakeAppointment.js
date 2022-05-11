import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';
const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='flex justify-center items-center '>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-primary text-xl font-bold'>Appointments</h2>
                <h3 className='text-4xl font-bold text-white'>Make an appoint today</h3>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat non vel itaque dicta autem quos facilis odio velit, sint earum hic quaerat quam? Fugiat, officia. Aut debitis aliquid molestias? Dicta quasi expedita reprehenderit itaque veritatis quam. Esse aut enim blanditiis!</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;