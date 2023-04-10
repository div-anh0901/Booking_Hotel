import { useRoutes } from 'react-router';
 import router from './router/router';
import { AuthContext } from './utils/context/AuthContext';
import { User } from './utils/type';
import { useState } from 'react';


function App() {
  const content = useRoutes(router)
  const [user, setUser] = useState<User>();
  return (
   <>
    <AuthContext.Provider value={{user,updateAuthUser:setUser}}>
      {content} 
    </AuthContext.Provider>
   </>
  );
}

export default App;
