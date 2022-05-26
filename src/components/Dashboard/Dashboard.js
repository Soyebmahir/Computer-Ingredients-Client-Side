import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
const [user]=useAuthState(auth)
    const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='font-bold text-xl' to="/dashboard">Profile</Link></li>
                    {!admin && <li><Link className='font-bold text-xl' to="/dashboard/order">My Orders</Link></li>}
                    {!admin && <li><Link className='font-bold text-xl' to="/dashboard/review">Add Review</Link></li>}
                    {admin && <li><Link className='font-bold text-xl' to="/dashboard/user">Users</Link></li>}
                    {admin && <li><Link className='font-bold text-xl' to="/dashboard/addProduct">Add Products</Link></li>}
                    {admin && <li><Link className='font-bold text-xl' to="/dashboard/manageOrder">Manage Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;