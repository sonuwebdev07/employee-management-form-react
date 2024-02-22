import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <div className='text-center text-success fs-3 my-4'>Login Form</div>
        <div className="container">
          <div className="row">
          <div className="col-md-3"></div>
              <div className="col-md-6">
                <form>
              <div className="mb-3">
                <label for="email_id" className="form-label">Email</label>
                <input type="email" className="form-control"  placeholder=""/>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control"  placeholder=""/>
              </div>
              <div className="mb-3">
              <Link className='nav-link text-success my-3 text-center' to="/sign-up">New User ?</Link>
                <input type="submit" className="form-control btn btn-success" value="Log In" />
              </div>
                </form>
              </div>
          </div>
        </div>
    </>
  )
}

export default Login
