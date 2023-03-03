import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
 import router from './router/router';


function App() {
  const content = useRoutes(router)
  return (
   <>
      {content} 
   </>
  );
}

export default App;
