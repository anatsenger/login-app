import React, { Component } from 'react';
import { accounts } from './Accounts';

class LoginClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    const user = accounts.find((account) => account.email === email && account.password === password);

    if (user) {
      this.setState({ message: 'Acessado com sucesso!' });
    } else {
      this.setState({ message: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    return (
      <div style={{ textAlign: '-webkit-center' }}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          style={{ marginBottom: '10px', display: 'block' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
          style={{ marginBottom: '10px', display: 'block' }}
        />
        <button onClick={this.handleLogin}>Acessar</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default LoginClass;
