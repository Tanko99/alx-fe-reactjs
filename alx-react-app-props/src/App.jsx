import React from 'react';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';



function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" age: 25, bio: "I am a Frontend web developer"};

  return  (
    <UserContext.Provider value={userData}>
      <div>
        <ProfilePage />
      </div>
    </UserContext.Provider>
    
  );
}

export default App;