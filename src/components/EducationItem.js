import React from "react";
import '../App.css';

const EducationItem = ({index, education_title, len}) =>{
    return (
        <>
            <div className="education-item" >
                {
                    index === len-1 ? <div></div> : <div className="education-line w-40px"></div> 
                }
                
                <div className="radius"></div>
                <img src={require('../img/6.png')} width={18} height={18} alt="profile" />
                <div style={{marginLeft: 5, textOverflow: "ellipsis", overflow:'hidden', whiteSpace:'nowrap', maxWidth: 350}}>{education_title}</div>
            </div>
            
        </>
    );
}

export default EducationItem;