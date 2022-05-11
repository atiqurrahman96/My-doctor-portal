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
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="card max-w-sm shadow-2xl">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">subject</span>
                                </label>
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Message</span>
                                </label>
                                <textarea type="textarea" placeholder="your message" class="input input-bordered" />
                            </div>

                            <div class="form-control mt-6">
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