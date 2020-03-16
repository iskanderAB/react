import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";


let App;
App = () => {
    const [person, setPerson] = useState({
        persons: [
            {
                x: "abdallah",
                y: "iskander",
                key: "a1a1a"
            },
            {
                x: "mohammed",
                y: "alaaa",
                key: "b1b1b"
            }]


    });
    const [other, setothers] = useState("otherState");
    const [showing, setShowing] = useState(true);
    const buttonHandler = (newName) => {
        setPerson({
            persons: [
                {
                    x: newName,
                    y: newName,
                    key: "a1a1a"
                },
                {
                    x: newName,
                    y: newName,
                    key: "b1b1b"
                }
            ]

        });
        setothers("helloother ")
    }
    let deletePersonHandler = (personIndex) => {
        const persons = person.persons;
        console.log(personIndex);
        persons.splice(personIndex, 1);
        setPerson({persons: persons});
    }
    const cahngedHandler = (e,key) => {
        const personIndex = person.persons.findIndex(p=>{
            return p.key === key  ;
        }) ;
        const p = person.persons[personIndex] ;
        p.x=e.target.value ;
        const mypersons = [...person.persons] ;
        mypersons[personIndex]= p ;
        console.log (mypersons) ;
        setPerson({
            persons:mypersons
        }) ;
    }
    const togglePersoinHandler = () => {
        setShowing(!showing);
    }
    let name = Math.round(Math.random(10) * 10);
    let p = null;
    if (showing) {
        p = person.persons.map((person, index) => {
            console.log(this);
            return <Person
                x={person.x}
                y={person.y}
                key={person.key}
                click={deletePersonHandler.bind(p, index)}
                changed={()=>cahngedHandler(window.event,person.key)}
            />
        })
    }
    return (<div className="App">
            <h1> hello mom </h1>
            {p}
            <button onClick={togglePersoinHandler}> showing</button>
        </div>
    );

};
export default App;
