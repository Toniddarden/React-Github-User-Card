import React from 'react';
import './App.css';
import FollowersCard from './Components/FollowersCard';
import UserCard from './Components/Data';

function App() {
  return (
    <div className="App">
      <h1>Toni User-Cards</h1>
      <div>
        <UserCard />
      </div>
    <FollowersCard />
    </div>
  );
}

export default App;
