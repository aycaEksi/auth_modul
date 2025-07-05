import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5203/api/auth/register', {
        username,
        password,
      });
      setMessage(response.data); 
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data); 
      } else {
        setMessage('Sunucuya ulaşılamıyor');
      }
    }
  };
//kayıt için form tasarımı
  return (
  <div className="container mt-5">
    <div className="card p-4 shadow">
      <h2 className="text-center mb-4">Kayıt Ol</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Kayıt Ol
        </button>
      </form>
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  </div>
);

};

export default RegisterForm;
