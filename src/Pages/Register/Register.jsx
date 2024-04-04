import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Providers';

const Register = () => {

      const { CreateUser } = useContext(AuthContext)


      const handleRegister = (e) => {
            e.preventDefault();
            // const email = e.target.email.value;
            // const password = e.target.password.value;
            // const name = e.target.name.value;
            // const photo = e.target.photo.value;
            // console.log(email, password);
            const form = new FormData(e.currentTarget)
            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            //console.log(name, photo, email, password);
            CreateUser(email, password)
                  .then(result => console.log(result))
                  .catch(error => console.error(error.message))
            
      }



      return (
            <div>
                  <Navbar/>
                  <h3 className="text-3xl my-10 text-center">Please Register</h3>
                  <form onSubmit={handleRegister} className="md: w-3/4 lg:w-1/2 mx-auto">
                  <div className="form-control">
                  <label className="label">
                        <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                  <label className="label">
                        <span className="label-text">Photo</span>
                  </label>
                  <input type="photo" name='photo' placeholder="Provide your photo url" className="input input-bordered" required />
                  </div>
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
                  
                  </div>
                  <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-center my-4'>have an account <Link className='text-blue-600 underline' to='/login'> login</Link></p>
                        
                  </form>
            </div>
      );
};

export default Register;