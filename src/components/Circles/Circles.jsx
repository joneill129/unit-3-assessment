import React from 'react'
import './Circles.css'

const Circles = (props) => {
    return (
        <>
        <div className="Circles">
        {props.circleNo.map ((circle, idx) =>
         <div className={props.selectedCircleIdx === idx ? "selected" : 'color'}>
         {props.selectedCircleIdx === idx ? `${idx+1}` : `${idx+1}`}
         </div>
        )}
        </div>
        </>
    );
}
 
export default Circles;
