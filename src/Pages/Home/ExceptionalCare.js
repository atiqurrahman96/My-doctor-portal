import React from 'react';
import treatment from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';
const ExceptionalCare = () => {
    return (
        <div class="hero min-h-screen mx-15 px-40">
            <div class="hero-content flex-col lg:flex-row ">
                <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Cares On Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;