import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Data = () => {
    const [state,setState]=useState([]);
  const [page,setPage]=useState(1);
  const [total,setTotal]=useState(0);

  const getTotal=(async()=>{
    try{
      let response = await axios.get("http://localhost:3004/users")

        setTotal(response.data.length/5)
    }
    catch(err){console.log(err);}
  })

    getTotal();

    const getData=( async()=>{
      try{
          let response = await axios.get("http://localhost:3004/users?_page="+page+"&_limit=5")
          setState(response.data);
      }
      catch(error){console.log(error)}
  })

  useEffect(() => {
      getData();
  }, [page])

  const deleteRecord=(id)=>{

        Swal.fire({
          title: "Are you sure to delete "+id+"?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
          if (result.isConfirmed) {
            axios.delete("http://localhost:3004/users/"+id)
            .then((res)=>{
              console.log(res);
            })
           
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
              getData();
          }
        }); 
  }
  
  const handlePageClick=(data)=>{
      setPage(data.selected + 1);
  }

  return (
    <>
    <div className='text-center text-success fs-2 my-5'>User Data</div>
    <div className="container">
      <div className="row">
          <div className="col-md-3">
          <Link className='nav-link text-success my-3 m-3 text-center' to="/"> Go to Log In Page</Link>
          </div>
          <div className="col-md-3">
          <Link className='nav-link text-success my-3 m-3 text-center' to="pagi"> Go to Data List</Link>
          </div>
          <div className="col-md-3">
          <Link className='nav-link text-success my-3 m-3 text-center' to="sign-up"> Go to Sing Up Page</Link>
          </div>
          <div className="col-md-3">
          <Link className='nav-link text-success my-3 m-3 text-center' to="/search"> Go to Search Page</Link>
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
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Date of Joining</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                state.map((item,index)=>
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.email_id}</td>
                  <td>{item.mobile_number}</td>
                  <td>{item.date}</td>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>{item.password}</td>
                  <td>
                        <Link className='btn btn-success' to={`/update/${item.id}`}>Update</Link>&nbsp;&nbsp;
                        <a href="javascrpt:void(0)" onClick={()=>{deleteRecord(item.id)}} className='btn btn-danger'>Delete</a>
                  </td>
                </tr>
                )
              }
            </tbody>
          </table>
                    <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={total}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={6}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Data
