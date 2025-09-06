import React from 'react';
import UseContext from './components/UseContext';
import UserDetails from './components/UserDetails';
import ProfilePage from './components/ProfilePage';


function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return  (
    <UseContext.Provider  value={userData}>
      <div>
        <ProfilePage />
      </div>
    </UseContext.Provider>
  )
}

export default App;