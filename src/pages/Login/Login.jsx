/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

  const { googleLogin, logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      toast.success('Welcome! You have successfully logged in.')

      // navigate after login
      navigate(location?.state ? location.state : '/');
    })
    .catch(error => {
      console.error(error);
    })
  }

  // log in user
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    if ((email, password)) {
      logIn(email, password)
      .then((result) => {
          toast.success('Welcome! You have successfully logged in.')
            
          // navigate after login
          navigate(location?.state ? location.state : '/');
      })
      .catch((error) => {
          // setError(error.message)
          setError('Invalid email or password')
      });
    }
    else {
        // setError(error.message)
        setError('Invalid email or password')
    }
  }

  return (
    <div>
      <div className="py-20">
        <div className="shadow p-8 md:p-12 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
          <h2 className="text-2xl font-bold text-center mb-1">
            Login
          </h2>
          <div className='h-0.5 w-16 bg-pink-600 mx-auto mb-4'></div>
          <p className='text-center text-xs font-medium text-zinc-500 mb-5'>Welcome back! Please login to your account.</p>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
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
                Login
              </button>
            </div>
            <div className="divider text-sm font-semibold">or</div>
            <div className="form-control my-6">
              <button onClick={handleGoogleLogin} className="btn btn-outline normal-case border border-black  bg-white p-3 w-full rounded-md font-semibold text-sm hover:bg-black hover:text-white">
              <FaGoogle></FaGoogle>
                Google
              </button>
            </div>
            <p className="text-[#706F6F] text-center text-xs font-semibold">
              Don’t have an account?{" "}
              <Link to="/register">
                <span className="text-pink-600">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
