import React from 'react'
import "./Person.css"
const Person =  (props) => {
    return (
        <div className="Person">
        <p> name : {props.x} last name :  {props.y}</p>
        <p> {props.children}</p>
         <button onClick={props.click}>hello click </button>
         <input onChange={props.changed} type="text" value={props.x}/>
        </div>
    );
}
export default Person ;
