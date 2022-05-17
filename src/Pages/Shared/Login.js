import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from './Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //   using token
    const [token] = useToken(user || googleUser)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    let signInError;
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    if (error || googleError) {
        signInError = <p>{error?.message || googleError?.message}</p>
    }


    // using react hooks form

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)

    };

    return (

        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Please Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>

                            </label>
                            <input type="email"
                                placeholder="Enter Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please, Provide a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                            <label className="label">
                                <span className="label-text">Your Password</span>

                            </label>
                            <input type="password"
                                placeholder="Enter Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password character must be 8 or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 ">{errors.password.message}</span>}

                            </label>
                            <p className='text-red-600'>{signInError}</p>
                        </div>
                        <input className='btn w-full mx-auto' type="submit" value="LogIn" />
                        <p>New to Doctor Portal?<Link className='text-green-500 m-2 text-xl' to='/signup'>Sign Up</Link> </p>
                        <p>Forget password?<Link to='/reset'>Reset Password</Link></p>
                    </form>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn ">SignIn With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;