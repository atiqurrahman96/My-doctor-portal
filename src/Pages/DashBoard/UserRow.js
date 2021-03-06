import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://vast-bayou-22125.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`successfully made an admin`)
                }
            })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make an admin</button>}</td>
            <td><button class="btn btn-xs">Remove</button></td>
        </tr>
    );
};

export default UserRow;