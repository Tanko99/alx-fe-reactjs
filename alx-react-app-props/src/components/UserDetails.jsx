import UserContext from './UserContext';
import { useContext } from 'react';


function UserDetails(){
    const userData = useContext(UserContext);
    return (
        <dive>
            <p> Name: {userData.name}</p>
            <p> Email: {userData.email}</p>
        </dive>
    );
}
export default UserDetails;