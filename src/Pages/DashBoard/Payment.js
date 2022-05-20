import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51L15r3H3h1jLZyAnVJF5gpszjeovS5oMEygc8k25ncqk75sguOtlrwhV47vw809mZiEZP9VVkuCDaqeCuA0uR6u100cWBarSoe');

const Payment = () => {
    const { appointmentId } = useParams();
    const url = `https://vast-bayou-22125.herokuapp.com/booking/${appointmentId}`
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div >
            <div class="card w-50  max-w-md shadow-2xl bg-base-100 mb-5">
                <div class="card-body">
                    <h2 class="card-title">Treatment Name:{appointment.treatmentName}</h2>
                    <p>Patient Name:{appointment.patientName}</p>
                    <p>Your appointment: <span className='text-orange-500'> {appointment.date}</span> at {appointment.slot}</p>
                    <p>Please Pay:${appointment.price}</p>

                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm appointment={appointment} />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;