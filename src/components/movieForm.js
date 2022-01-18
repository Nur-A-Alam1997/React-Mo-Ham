import React from "react"

class MovieForm extends React.Component{

    constructor(){
        super()
    }
    formHandler = e =>{
        console.log("yead")
        e.preventDefault()
    }
    render(){
        return <>
        <form onSubmit={this.formHandler} >
            <div className="form-group">
                <label or="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label or="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" or="exampleCheck1">Check me out</label>
            </div>
            <button  className="btn btn-primary">Submit</button>
        </form>
    </>
}
}

export default MovieForm