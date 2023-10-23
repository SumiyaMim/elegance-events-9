/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loading) {
        return (
            <div className='flex justify-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname}></Navigate>;

}

export default PrivateRoute
