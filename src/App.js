import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect( () => {
    const hash = getTokenFromResponse();

    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, [])
  return (
    <div className="App">
      {!token && <Login />}
      {token && <h1>Logged In</h1>}
    </div>
  );
}

export default App;
