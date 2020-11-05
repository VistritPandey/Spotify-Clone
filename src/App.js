import { useEffect } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify';

function App() {

  useEffect( () => {
    const token = getTokenFromResponse()
    console.log('I have a noob', token)
  }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
