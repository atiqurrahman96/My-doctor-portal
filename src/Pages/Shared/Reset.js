import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Reset = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPassword = event => {
        event.preventDefault();
        const email = event.target.email.value;
        sendPasswordResetEmail(email);
        // for clearing field
        event.target.reset();
        toast('Sent email');
    }
    return (
        <form onSubmit={handleResetPassword}>
            <div className='text-center py-2'>
                <input type="email" name="email" placeholder="Enter your Email" class="input input-bordered w-full max-w-xs m-2" />
                <br />
                <input className='btn' type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default Reset;