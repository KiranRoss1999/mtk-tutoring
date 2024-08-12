import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';

const Profile = () => {
  const {data} = useQuery(QUERY_ME);
  let user;

  if(data) {
    user = data.user;
  }

  return (
    <>
      <h1>Hello</h1>
      {user ? (
      <>
      <h2>
        Your first name: {user.firstName}
      </h2>
      <h2>
        Your last name: {user.lastName}
      </h2>
      <h2>
        Your email: {user.email}
      </h2>
    </>
    ) : null}
    </>

  );
};

export default Profile;