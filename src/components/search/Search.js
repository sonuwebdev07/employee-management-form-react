import axios from 'axios';
import React, { useEffect,useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';



const Search = () => {

  const [state,setState]=useState([]);
  const[store,setStore]=useState({
      first_name:'',
      last_name:'',
      email_id:'',
      mobile_number:'',
      password:''
  })

  useEffect(()=>{
    axios.get("http://localhost:3004/users")
    .then((res)=>{
      setState(res.data)
    })
  },[])

  const searchBySelect=(event)=>{
    axios.get("http://localhost:3004/users/"+event.target.value)
    .then((res)=>{
      setStore(res.data)
    })
    .catch(()=>{
      toast.success("Enter a Valid ID !")
  })
  }

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-12">Search Here !!!</div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-6">
            <select class="form-select select" onChange={searchBySelect} >
            <option selected>----- Select Id here -----</option>
            {
              state.map((item,index)=>
                <option value={item.id}>{item.id}</option>
              )
            }
                
          </select>
            </div>
            <div className="col-md-6">
              <div class="mb-3">
                <Toaster/>
                <input type="text" class="form-control" placeholder="Enter Id here" onChange={searchBySelect}/>
              </div>
            </div>
        </div>
      </div>
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>{store.id}</td>
                  <td>{store.first_name}</td>
                  <td>{store.last_name}</td>
                  <td>{store.email_id}</td>
                  <td>{store.mobile_number}</td>
                  <td>{store.password}</td>
                </tr>
              </tbody>
            </table>
              </div>
              </div>
              </div>
      </>

  )
}

export default Search
