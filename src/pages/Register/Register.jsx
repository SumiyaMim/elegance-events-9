/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {

  const { googleLogin, createUser, handleUpdateProfile, logOut } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // google register
  const handleGoogleRegister = () => {
    googleLogin()
    .then((result) => {
      toast.success('Great job! Account created successfully.')
      navigate('/');
    })
    .catch(error => {
      console.error(error);
    })
  }

  // create user
  const handleCreateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log(name, email, photo, password);

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/.test(password)) {
      setError('Password must be 6 characters with a capital letter and a special character.')
    }
    else {
      setError("");
      createUser(email, password).then((result) => {
          handleUpdateProfile(name, photo)
          .then((result) => {
            toast.success('Great job! Account created successfully.')
            logOut(); 
            navigate('/login');
          })
          .catch((error) => {
            console.error(error);
          })
      });
    }
  }

  return (
    <div>
      <div className="py-20">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
          <h2 className="text-2xl font-bold text-center mb-1">
            Register
          </h2>
          <div className='h-0.5 w-24 bg-pink-600 mx-auto mb-4'></div>
          <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Join us today, your journey awaits, register now!</p>
          <form onSubmit={handleCreateUser}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input bg-[#F3F3F3] focus:outline-none rounded placeholder:text-xs text-sm"
                required
              />
            </div>
            <p className='mt-2 text-xs text-red-600 font-semibold'>{error}</p>
            <div className="form-control my-6">
              <button type='submit' className="bg-black p-3 w-full rounded-md text-white font-semibold text-sm">
                Register
              </button>
            </div>
            <div className="divider text-sm font-semibold">or</div>
            <div className="form-control my-6">
              <button onClick={handleGoogleRegister} className="btn btn-outline normal-case border border-black  bg-white p-3 w-full rounded-md font-semibold text-sm hover:bg-black hover:text-white">
              <FaGoogle></FaGoogle>
                Google
              </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-pink-600">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
