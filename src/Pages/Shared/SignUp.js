
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from './Loading';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // using custom hooks
    const [token] = useToken(user || googleUser)

    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        alert('Updated profile');

    };
    let signUpError;
    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }
    if (error || googleError || updateError) {
        signUpError = <p>{error?.message || googleError?.message || updateError?.message}</p>
    }
    if (token) {

        navigate('/appointments')
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Sign Up</h2>

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
                                <span className="label-text">Your Password</span>

                            </label>
                            <input type="password"
                                placeholder="Enter your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength
                                        : {
                                        value: 8,
                                        message: 'Your password must be 8 or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                            <p>Already have an account?<Link className='text-green-500 m-2' to='/login'>Log In</Link></p>
                        </div>
                        <p>{signUpError}</p>
                        <input className='btn w-full' type="submit" value="Sign Up" />
                    </form>


                </div>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn">SingIn with Google</button>
            </div>

        </div>
    );
};

export default SignUp;