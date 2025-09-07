import UserContext from './UserContex';
import { useContext } from 'react';

const UserProfile = () => {

    const userData = useContext(UserContext);
    return (
        <div>
            <h2>Name: {userData.name} </h2>
             <p>Age: {userData.age}</p>
             <p>Bio:  {userData.bio}</p>
        </div>
    );
};

export default UserProfile;