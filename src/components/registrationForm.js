import React from "react"

class RegistrationForm extends React.Component {

    constructor() {
        super()
        this.state = {
            account: {
                email: 'email@gmail.com',
                password: '*123~',
                firstName: 'Alis',
                lastName: 'Gyana'
            },
            error: {},
            // password: 'password is not valid'

        }
    }
    validate = () => {
        const error = {}
        const { email, password, } = this.state.account;
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
        const { email, password, firstName, lastName } = this.state.account;
        const { error } = this.state;
        return <>
            <div className="col-9">

                <div class="card card-body">
                    <form onSubmit={this.formSubmit} >
                        <div className="form-group">
                            <label htmlFor="email">Email address </label>
                            <input onChange={this.formChange} name="email" type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {error.email && <div className="alert alert-danger">{error.email}</div>}
                        </div>
                        <div className="form-group">
                            <label or="exampleInputPassword1">Password </label>
                            <input onChange={this.formChange} name="password" type="password" value={password} className="form-control" id="exampleInputPassword1" />
                            {error.password && <div className="alert alert-danger">{error.password}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name </label>
                            <input onChange={this.formChange} name="firstName" type="text" value={firstName} className="form-control" id="firstName" aria-describedby="emailHelp" placeholder={firstName} />

                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">First Name </label>
                            <input onChange={this.formChange} name="lastName" type="text" value={lastName} className="form-control" id="lastName" aria-describedby="emailHelp" placeholder={lastName} />

                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" or="exampleCheck1">Check me out</label>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    }
}

export default RegistrationForm