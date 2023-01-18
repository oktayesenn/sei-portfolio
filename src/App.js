import Navbar from "./scenes/Navbar";
import React, { useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumSceens = useMediaQuery('(min-width: 1060px)');


  return (
    <div className="App bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      <h1>My First React App</h1>
    </div>
  );
}

export default App;
