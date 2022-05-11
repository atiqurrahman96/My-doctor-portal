import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import ExceptionalCare from './ExceptionalCare';
import Info from "./Info"
import MakeAppointment from './MakeAppointment';
import ServicesInfo from './ServicesInfo';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <ServicesInfo></ServicesInfo>
            <ExceptionalCare></ExceptionalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
            <Footer></Footer>

        </div>
    );
};

export default Home;