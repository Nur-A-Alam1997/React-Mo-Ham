import React from "react"

class MovieForm extends React.Component {

    constructor() {
        super()
        this.state = {
            account: {
                email: 'email@gmail.com',
                password: '*123~'
            },
            error: { },
            // password: 'password is not valid'

        }
    }
    validate = () => {
        const error = {}
        const { email, password } = this.state.account;
        if (email.trim() === '') error.email = 'email is not valid';
        if (password.trim() === '') error.password = 'password is not valid';
        return error

    }

    formSubmit = (e) => {
        console.log("yead")
        e.preventDefault()
        const error = this.validate()
        console.log(error)
        this.setState({ error })
    }

    formChange = (e) => {
        const account = { ...this.state.account }
        account[e.currentTarget.name] = e.currentTarget.value
        // account.password = e.currentTarget.value
        this.setState({ account })
    }

    render() {
        const { email, password } = this.state.account;
        const { error } = this.state;
        return <>
            <form onSubmit={this.formSubmit} >
                <div className="form-group">
                    <label htmlFor="email">Email address </label>
                    <input onChange={this.formChange} name="email" type="email" value={email} error={error.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {error.email && <div className="alert alert-danger">{error.email}</div>}
                </div>
                <div className="form-group">
                    <label or="exampleInputPassword1">Password </label>
                    <input onChange={this.formChange} name="password" type="password" value={password} className="form-control" id="exampleInputPassword1" />
                    {error.password && <div className="alert alert-danger">{error.password}</div>}
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