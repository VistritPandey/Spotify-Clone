import { useEffect, useState } from 'react';
import './App.css';
import Player from "./Player";
import Login from './Login'
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromResponse } from './spotify';

const s = new SpotifyWebApi();

function App() {
  const [ token, dispatch] = useState();

  useEffect(() => {
    
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      

      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });

      s.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      s.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;
