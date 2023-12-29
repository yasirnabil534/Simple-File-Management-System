import { useState } from 'react';
import AppRoutes from './routes/route';
import { UserContext } from './contexts/Context';

function App() {
  const [user, setUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <AppRoutes />
      </UserContext.Provider>
    </div>
  )
}

export default App;
