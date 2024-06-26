import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Providers';

const Login = () => {

      const { logInUser } = useContext(AuthContext) 
      const location = useLocation();
      const navigate = useNavigate();
      console.log("location in the login page", location);

      const handleLogin = (e) => {
            e.preventDefault();
            // const email = e.target.email.value;
            // const password = e.target.password.value;
            // console.log(email, password);
            const form = new FormData(e.currentTarget)
            const email = form.get('email');
            const password = form.get('password');
            //console.log(form, email);

            logInUser(email, password)
                  .then(result => {
                        console.log(result)

                        //navigate after login
                        navigate(location?.state ? location.state : '/')
                        
                  })
                  .catch(error => console.error(error.message))
      
      }



      return (
            <div>
                  <Navbar/>
                  <h3 className="text-3xl my-10 text-center">Please Login</h3>
                  <form onSubmit={handleLogin} className="md: w-3/4 lg:w-1/2 mx-auto">
                  <div className="form-control">
                  <label className="label">
                        <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                  <label className="label">
                        <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                  <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center my-4'>Don't have an account <Link className='text-blue-600 underline' to='/register'> Register</Link></p>
                        
                  </form>
                  
            </div>
      );
};

export default Login;