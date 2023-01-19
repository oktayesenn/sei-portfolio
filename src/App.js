import Navbar from "./scenes/Navbar";
import React, { useEffect, useState } from 'react';
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";



function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumSceens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if(window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />

      <div classNAme= "w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

        )}
        </div>
    </div>
  );
}

export default App;
