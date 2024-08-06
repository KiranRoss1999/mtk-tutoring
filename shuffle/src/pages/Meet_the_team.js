import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MeetTheTeamSectionTeams1 from '../components/teams/MeetTheTeamSectionTeams1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function MeetTheTeam() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <MeetTheTeamSectionTeams1 />
    </React.Fragment>
  );
}

