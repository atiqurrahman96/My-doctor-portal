import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // the following line will be commented for using react query
    // const [services, setServices] = useState([]);
    // ----For using modals we have to decalare a state where card maps or contains all data of container---------
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { refetch, isLoading, data: services } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res =>
                res.json()
            )
    )
    if (isLoading) {
        return <Loading></Loading>
    }




    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div>
            <h4 className='text-xl text-center text-primary'>Available Appointments:{format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </Service>)
                }
            </div>
            {treatment && <BookingModal date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;