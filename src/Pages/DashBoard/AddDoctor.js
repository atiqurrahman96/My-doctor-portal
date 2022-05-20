import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('https://vast-bayou-22125.herokuapp.com/service').then(res => res.json()));

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '45e1e20e99a29a7258ed5285e2902db0';

    const onSubmit = async data => {
        console.log(data, 'data')
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = (`https://api.imgbb.com/1/upload?key=${imageStorageKey}`)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send data to database
                    fetch('https://vast-bayou-22125.herokuapp.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully ')
                                reset();
                            }
                            else {
                                toast.error('Failed add to doctor')
                            }
                        })

                }

            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">add a doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Name</span>

                    </label>
                    <input type="text"
                        placeholder="Enter your name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            },

                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                    <label className="label">
                        <span className="label-text">Your Email</span>

                    </label>
                    <input type="email"
                        placeholder="Enter your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Please, Provide a valid email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    <label className="label">
                        <span className="label-text">specialty</span>

                    </label>
                    <select {...register("specialty")} class="select w-full max-w-xs input-bordered">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}


                            >{service.name}</option>)
                        }


                    </select>
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input type="file"

                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is required'
                            },

                        })} />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                    </label>



                </div>

                <input className='btn w-50' type="submit" value="Add Doctor" />
            </form>
        </div>
    );
};

export default AddDoctor;