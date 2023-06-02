import React from "react";
import '../App.css';
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";

const LayoutGridProfiles = ({ name, first_name, last_name, current_title, location, phone_number, personal_email, linkedIn, experiences, educations}) => {

    const experienceItemsNum = experiences.length;
    const educationItemsNum = educations.length;

    const experienceItems = experiences.map((title, idx) => (<ExperienceItem index={idx} experience_title={title} len={experienceItemsNum} />));
    const educationItems = educations.map((title, idx) => (<EducationItem index={idx} education_title={title} len={educationItemsNum} />));
    
    return (
        <>
            <div className="card-deck mb-2">
                <div className="card-body" style={{paddingLeft: 50, paddingTop: 20, paddingRight: 0, paddingBottom: 10}}>

                    <div className="flex-container">
                        <div className="name">{name}</div>
                        <div style={{marginLeft: 20}}>
                            <img src={require('../img/1.png')} width={25} height={25} alt="profile" />
                        </div>
                        <div style={{marginLeft: 10}}>
                            <img src={require('../img/2.png')} width={25} height={25} alt="profile" />
                        </div>       
                        <div className="split-vertical-line"></div>                 
                        <div style={{marginLeft: 10}}>
                            <img src={require('../img/3.png')} width={25} height={25} alt="profile" />
                        </div>                    
                    </div>
                    
                    <div class="flex-container">
                        <div className="title">{current_title}</div>
                        <div className="middle-dot"></div>
                        <div className="location">{location}</div>
                    </div>

                    
                    <div className="split-horizontal-line"></div>  
                    
                    <div className="experience-container">
                        <div className="experience" style={{width: 100}}>Experience</div>
                        <div style={{marginLeft: 20}}>
                            {experienceItems}
                        </div>
                    </div>

                    <div className="education-container">
                        <div className="education" style={{width: 100}}>Education</div>
                        <div style={{marginLeft: 20}}>
                            {educationItems}                        
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LayoutGridProfiles;