import React from "react"

class MovieForm extends React.Component {

    constructor() {
        super()
        this.state = {
            account: {
                email: 'email@gmail.com',
                password: '*123~'
            }
        }
    }
    formSubmit = (e) => {
        console.log("yead")
        e.preventDefault()
    }

    formChange = (e) => {
        const account = {...this.state.account}
        account[e.currentTarget.name] = e.currentTarget.value
        // account.password = e.currentTarget.value
        this.setState({account})
    }

    render() {
        const { email, password } = this.state.account;
        return <>
            <form onSubmit={this.formSubmit} >
                <div className="form-group">
                    <label htmlFor="email">Email address </label>
                    <input onChange={this.formChange} name="email" type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

                </div>
                <div className="form-group">
                    <label or="exampleInputPassword1">Password </label>
                    <input  onChange={this.formChange} name="password" type="password" value={password}   className="form-control" id="exampleInputPassword1"  />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" or="exampleCheck1">Check me out</label>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </>
    }
}

export default MovieForm