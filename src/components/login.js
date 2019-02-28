import superagent from "superagent";
import React from "react";
import { LoginContext } from "./auth/context.js";
import { Link } from "react-router-dom";

const API = "https://dev-fund.herokuapp.com";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      am: 'not useless'
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        console.log('user from login', response.body)
        let user = response.body;
        loginMethodFromContext(user);
      })
      .catch(console.error);
      this.props.toggleModal();
  };

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <form onSubmit={e => this.handleSubmit(e, context.login)}>
                <fieldset>
                  <legend>Login Information:</legend>
                  <label>
                    Username:
                    <input
                      type="text"
                      name="username"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                  <label>
                    Password:
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleChange}
                      required
                    />
                  </label>
                </fieldset>
                <input type="submit" value="Submit" />
              </form>
              <section>
                <p>Don't have an account yet?</p>
                <button>
                  <Link to="/signup">Sign Up!</Link>
                </button>
              </section>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Login;
