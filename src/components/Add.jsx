import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const[data,changedata]=useState(
        {
            "id":"",
            "email":"",
            "firstname":"",
            "lastname":""
        }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="contaier">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">id</label>
                            <input type="text" className="form-control" name="id" value={data.id} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name= "email" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">firstname</label>
                            <input type="text" className="form-control" name= "firstname" value={data.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">lastname</label>
                            <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler} />
                        </div><br />
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <button className="btn btn-success" onClick={readvalue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add