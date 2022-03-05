import React from 'react';
import './App.css';
import {getPhotos, getPhotosByAlbum} from "./Api/PhotoApi";

function App() {

  const handleClick = async () => {
    const data = await getPhotosByAlbum(3, 5);
    console.log(data);
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click!!</button>
    </div>
  );
}

export default App;
