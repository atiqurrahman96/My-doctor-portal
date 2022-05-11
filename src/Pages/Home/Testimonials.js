import React from 'react';
import people1 from '../../assets/images/people1.png'
import Testimonial from './Testimonial';
import quote from '../../assets/icons/quote.svg'
const testimonials = () => {
    const testimonials = [
        { _id: 1, name: 'Winson Herry', state: 'California', img: people1, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dicta odit sapiente quas numquam exercitationem!' },
        { _id: 2, name: 'Winson Herry', state: 'California', img: people1, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dicta odit sapiente quas numquam exercitationem!' },
        { _id: 3, name: 'Winson Herry', state: 'California', img: people1, description: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dicta odit sapiente quas numquam exercitationem!' },
    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-primary text-xl uppercase'>Tesimonials</h1>
                    <h2 className='text-4xl'>What our Patient says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        testimonials.map(testimonial => <Testimonial
                            key={testimonial._id}
                            testimonial={testimonial}
                        >
                        </Testimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default testimonials;