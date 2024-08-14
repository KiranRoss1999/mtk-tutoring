import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import {QUERY_ALL_TUTORS} from '../../utils/queries';

const TutorList = () => {
  const {data} = useQuery(QUERY_ALL_TUTORS);
  let tutors;

  if(data) {
    tutors = data.tutors;
    // console.log('it exists');
  }

  // console.log(tutors);

  return (
    <>
    <div>
      <h1 className='p-3'>Select a Tutor</h1>
    </div>
    {tutors ? (
      tutors.map((tutor) => {
        let tutorURL = tutor._id + '/tutorPage';
        return (
          <div key={tutor.firstName} className='p-2'>
            <button id={tutor._id}>
              <a href={tutorURL}>{tutor.firstName} {tutor.lastName}</a>
            </button>
          </div>
        )
      })
    ) : (
      <h1>No Tutors Found</h1>
    )}
    </>

  );
};

export default TutorList;


