
import UseContext from './UseContext';

function UserDetails() {

    const userData = useContext(UseContext);
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;