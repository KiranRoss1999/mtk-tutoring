import { useParams } from "react-router-dom";
import {QUERY_SINGLE_TUTOR} from '../utils/queries';
import { useQuery } from "@apollo/client";

const TutorPage = () => {
  const {tutorId} = useParams();
  // console.log(tutorId);

  const {loading, data} = useQuery(QUERY_SINGLE_TUTOR, {
    variables: {tutorId: tutorId},
  });

  const tutor = data?.tutor || {};
  // console.log(tutor);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>
        <h1 className="p-3">Tutor:</h1>
      </div>
      <h1 className="p-2">{tutor.firstName}</h1>
      <h1 className="p-2">{tutor.lastName}</h1>
    </div>
  )
};

export default TutorPage;