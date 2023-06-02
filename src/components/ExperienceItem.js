import React from "react";
import '../App.css';

const ExperienceItem = ({index, experience_title, len}) =>{
    return (
        <>
            <div className="experience-item" >
                {
                    index === len-1 ? <div></div> : <div className="experience-line w-40px"></div> 
                }
                
                <div className="radius"></div>
                <img src={require('../img/4.png')} width={18} height={18} alt="profile" />
                <div style={{marginLeft: 5, textOverflow: "ellipsis", overflow:'hidden', whiteSpace:'nowrap', maxWidth: 350}}>{experience_title}</div>
            </div>
            
        </>
    );
}

export default ExperienceItem;