import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'


const Signup = () => {


  const [state,setState] = useState(
    {
      full_name:'',
      email_id:'',
      mobile_number:'',
      date:'',
      designation:'',
      salary:'',
      password:''
    }
  )

  const handler = (event) => {
      const {name,value}=event.target;
      setState({...state,[name]:value})
  }

  const saveEmployeeData = (event) => {
    event.preventDefault();
    console.log(state);
    axios.post("http://localhost:3004/users",state)
    .then((res)=>{
      console.log(res);
      toast.success("Data Saved Successfully !!!")
    })
    .then((err)=>{
      console.log(err);
    })

  }

  return (
   <>
   <div className='text-center text-success fs-3 my-4'>Sign Up Form</div>
   <div className="container">
     <div className="row">
     <div className="col-md-3"></div>
         <div className="col-md-6">
         <Toaster/>
           <form onSubmit={saveEmployeeData} method='post'>
           <div className="mb-3">
           <label htmlFor="full_name" className="form-label">Full Name</label>
           <input type="text" name='full_name' onChange={handler} className="form-control"  placeholder=""/>
         </div>
           <div className="mb-3">
           <label htmlFor="email_id" className="form-label">Email</label>
           <input type="email" name='email_id' onChange={handler} className="form-control"  placeholder=""/>
         </div>
         <div className="mb-3">
           <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
           <input type="text" name='mobile_number' onChange={handler} className="form-control"  placeholder=""/>
         </div>
         <div className="mb-3">
           <label htmlFor="date" className="form-label">Date of Joining</label>
           <input type="text" name='date' onChange={handler} className="form-control"  placeholder="yyyy-mm-dd"/>
         </div>
         <div className="mb-3">
           <label htmlFor="designation" className="form-label">Designation</label>
           <input type="text" name='designation' onChange={handler} className="form-control"  placeholder=""/>
         </div>
         <div className="mb-3">
           <label htmlFor="salary" className="form-label">Salary</label>
           <input type="text" name='salary' onChange={handler} className="form-control"  placeholder=""/>
         </div>
         <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" name='password' onChange={handler} className="form-control"  placeholder=""/>
         </div>
         <div className="mb-3">
            <Link className='nav-link text-success my-3 text-center' to="/">Already a User ?</Link>
           <input type="submit" className="form-control btn btn-success" value="Sing Up" />
         </div>
         <div className="mb-3">
         <Link className='nav-link text-success my-3 text-end' to="/data">Manage Data</Link>
         </div>
           </form>
         </div>
     </div>
   </div>
   </>
  )
}

export default Signup
