import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-2xl text-purple-500'>Dashboard</h1>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My appointments</Link></li>
                    <li><Link to='/dashboard/review'>Reviews</Link></li>
                    <li><Link to='/dashboard/history'>My history</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;