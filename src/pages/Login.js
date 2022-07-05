import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.state = {
      email: '',
      password: '',
      isValid: false,
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, (state) => {
      const { email, password } = this.state;
      const isValid = password.length > 6 && email.match(/.+\@.+\..+/);
      this.setState({
        isValid,
      });
    });
  }

  loginClick() {
    const { history } = this.props;
    history.push('/turmas');
  }

  render() {
    const { email, password, isValid } = this.state;
    return (
      <div id="loginForm">
        <h1>Login</h1>
        <label>
          Email
          {' '}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label>
          Password
          {' '}
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type='button'
          disabled={ !isValid }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;