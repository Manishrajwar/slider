import React, {useState, useEffect} from 'react';
import Home from "./Home";
import LandingPages from "./LandingPages";

const Main = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
      
      const timeout = setTimeout(() => {
        setRedirect(true);
      }, 3000); 
  
  
      return () => clearTimeout(timeout);
    }, []);
    return (
        <>
         {!redirect && <LandingPages />}
         {redirect && <Home />}
        </>
    );
}

export default Main;