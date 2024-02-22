import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {

    const [state,setState]=useState([]);
    const [page,setPage]=useState(1);
    const [total,setTotal]=useState(0);

    const getTotal = (async()=>{
        try{
            let response = await axios.get("http://localhost:3004/users")
            // console.log(response.data.length);
            setTotal(response.data.length/10);
        }
        catch(error){console.log(error)}
    })
        getTotal();

    const getData=( async()=>{
        try{
            let response = await axios.get("http://localhost:3004/users?_page="+page+"&_limit=10")
            setState(response.data);
        }
        catch(error){console.log(error)}
    })

    useEffect(()=>{
        getData();
    },[page])

    const handlePageClick=(data)=>{
            setPage(data.selected + 1);
    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center text-success fs-3 my-5">Data List</div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                
                <div className="col-md-12">
                    <table class="table table-hover">
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

export default Pagination
