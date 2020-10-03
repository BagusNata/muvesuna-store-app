import React, { Component } from "react";
import { Link } from "react-router-dom";


const initialState = {
  userid: "",
  password: "",
  useridError: "",
  passwordError: "",
};

export class login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    
  }
  validate = () => {
    let useridError = "";
    let passwordError = "";

    if (this.state.userid.length < 5) {
      useridError = "Invalid User id!";
    }
    if (this.state.password.length < 6) {
      passwordError = "Wrong password!";
    }

    if (useridError || passwordError) {
      this.setState({ useridError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <header className="login-header">
          <Link to="/Home">
            <i className="icon-tokopedia"></i>
          </Link>
        </header>
        <div className="background-content">
          <div className="form-base">
            <form onSubmit={this.handleSubmit}>
              <div className="tal">
                <label className="login-font">Nomor Ponsel atau Email :</label> <br />
                <input
                  className="border-form"
                  name="userid"
                  value={this.state.userid}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.useridError}
                </div>
              </div>

              <div className="tal">
                <label className="login-font">Password :</label> <br />
                <input
                  className="border-form"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
                </div>
              </div>

              <br />
              <div style={{ textAlign: "center" }}>
                <button type="button" className="btn btn-success btn-login">
                  <Link style={{ color: "#fafafa" }} to="/Home">
                    LOGIN
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
