import React, { useState } from 'react';
import { accounts } from './Accounts';

const LoginFunctional = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const user = accounts.find((account) => account.email === email && account.password === password);
    
    if (user) {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ textAlign: '-webkit-center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '10px', display: 'block' }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', display: 'block' }}
      />
      <button onClick={handleLogin}>Acessar</button>
      <p>{message}</p>
    </div>
  );
};

export default LoginFunctional;

