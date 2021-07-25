import './App.css';
import React, {useState} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/userContext";


const App = () => {
    const [user, setUser] = useState(
        {

                    avatar: 'https://www.gravatar.com/avatar/0?d=robohash',
                    name: 'Pink Robot'
                }
    )
    const [stats, setStats] = useState({
        followers: 1000,
        following: 100
    })




    const changeAvatar = url =>
    {
        setUser({avatar: url || user.avatar, name: user.name})

    }


    return (
        <div className={'app'}>
          <TwitterContext.Provider value={{
              user,
              stats,
              changeAvatar
          }}>
              <Nav/>
              <Body/>
          </TwitterContext.Provider>
        </div>
    );
  }


export default App;
