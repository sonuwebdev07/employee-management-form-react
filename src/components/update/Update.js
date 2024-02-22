import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Update = () => {

  const [state, setState] = useState(
    {
      id: '',
      full_name: '',
      email_id: '',
      mobile_number: '',
      date: '',
      designation: '',
      salary: '',
      password: ''
    }
  )

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    axios.get("http://localhost:3004/users/" + params.id)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value })
  }

  const updateData = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3004/users/" + params.id, state)
      .then((res) => {
        navigate("/user-data");
      })
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 fs-3 text-center">Update</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={updateData} method='post'>
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">First Name</label>
                <input type="text" name='full_name' onChange={handler} className="form-control" placeholder="" value={state.full_name} />
              </div>
              <div className="mb-3">
                <label htmlFor="email_id" className="form-label">Email</label>
                <input type="email" name='email_id' onChange={handler} className="form-control" placeholder="" value={state.email_id} />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile_number" className="form-label">Mobile Number</label>
                <input type="text" name='mobile_number' onChange={handler} className="form-control" placeholder="" value={state.mobile_number} />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date of Joining</label>
                <input type="text" name='date' onChange={handler} className="form-control" placeholder="yyyy-mm-dd" value={state.date}/>
              </div>
              <div className="mb-3">
                <label htmlFor="designation" className="form-label">Designation</label>
                <input type="text" name='designation' onChange={handler} className="form-control" placeholder="" value={state.designation}/>
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="text" name='salary' onChange={handler} className="form-control" placeholder="" value={state.salary}/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" name='password' onChange={handler} className="form-control" placeholder="" value={state.password} />
              </div>
              <div className="mb-3">
                <input type="submit" className="form-control btn btn-success my-4" value="Update Data" />
              </div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default Update
