import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Providers';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
      
      const location = useLocation()

      const { user, loading } = useContext(AuthContext)

      if (loading) {
            return <span className="loading loading-spinner loading-md"></span>
      }
      if (user) {
            return children
      }
      return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;