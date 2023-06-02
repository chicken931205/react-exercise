import React, { useState, useEffect } from "react";
import './App.css';
import LayoutGridProfiles from './components/LayoutGridProfiles';

function App() {

  const [profiles, setProfiles] = useState([]);

  useEffect(() => {

    const profileData = [
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Ocrrrrrrr", 
                            "Junior Machine Learing Engineer at Spotify Junrrrrrrrr."],
        educations: ["Stanford University, M.S., Computer Science Octrrrrr"]       
      },
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Occcccccc...", 
                            "Junior Machine Learing Engineer at Spotify Jun..."],
        educations: ["Stanford University, M.S., Computer Science Oct..."]       
      },
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Oc...", 
                            "Junior Machine Learing Engineer at Spotify Jun..."],
        educations: ["Stanford University, M.S., Computer Science Oct..."]       
      },
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Oc...", 
                            "Junior Machine Learing Engineer at Spotify Jun..."],
        educations: ["Stanford University, M.S., Computer Science Oct..."]       
      },
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Oc...", 
                            "Junior Machine Learing Engineer at Spotify Jun...",
                            "Junior Machine Learing Engineer at Spotify Jun..."],
        educations: ["Stanford University, M.S., Computer Science Oct..."]       
      },
      {
        name: 'James Hiddleston',
        first_name: 'James',
        last_name: 'Hiddleston',
        current_title: 'Machine Learning Engineer',
        location: 'San Francisco Bay Area',
        phone_number: '1111',
        personal_email : '11111',
        linkedIn:'llllll',
        experiences: [ "Senior Machine Learning Engineer of Google Oc...", 
                            "Junior Machine Learing Engineer at Spotify Jun..."],
        educations: ["Stanford University, M.S., Computer Science Oct..."]       
      },
      ]

    setProfiles(profileData);
  }, []);


  const GridProfiles = profiles.map((profile, idx) => (<LayoutGridProfiles  {...profile} />));

  return (
    <>
      <div className="container-fluid pl-0 pr-0">
        <div className="container">
          <div className="row justify-content-around">{GridProfiles}</div>
        </div>
      </div>
    </>
    
  );

}

export default App;
