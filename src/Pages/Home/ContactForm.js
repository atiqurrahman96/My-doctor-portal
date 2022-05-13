import React from 'react';
import MainButton from '../Shared/MainButton';
import appointment from '../../assets/images/appointment.png'
const ContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className='text-center mt-5'>
                <h1 className='text-primary'>Contact us</h1>
                <h2 className='text-4xl text-white'>Stay Connected With Us</h2>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">subject</span>
                                </label>
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea type="textarea" placeholder="your message" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <MainButton>Submit</MainButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default ContactForm;