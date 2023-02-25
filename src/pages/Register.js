import React from 'react'

export default function Register() {
    let submitData(
        console.log(submitData);
    )
    
  return (
        <form className=' w-25 offset-4'>
            <h1>Register Form</h1>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name='username' className="form-control" id="username" aria-describedby="username" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" onClick={submitData} className="btn btn-primary">Submit</button>
        </form>

  )
}
