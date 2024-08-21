import React, { useState } from 'react';
import '../assets/css/Form.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert(' Todos los campos son obligatorios (no pueden estar vacíos)');
    } else if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres.');
    } else {
      alert('Login Correcto');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Login