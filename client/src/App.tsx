import { useState } from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import Welcome from './Welcome';

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [username, setUsername] = useState<string>(localStorage.getItem('username') || '');
  const handleLoginSuccess = (token: string, username: string) => {
    setToken(token);
    setUsername(username);
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setToken(null);
    setUsername('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };
  if (token) {
    return <Welcome username={username} onLogout={handleLogout} />;
  }
  return (
    <div className="App">
      <h1>Auth Modülü Örneği</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <hr />
      <RegisterForm />
    </div>
  );
}
export default App;