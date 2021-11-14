import React from 'react'


const ClickMe = () => (alert("Button Is Clicked"))


const Hello = (props) => (
    <div>
        <h1>My name : {props.name}</h1>
        <button className="btn btn-primary" onClick = {ClickMe}>Click Me</button>
    </div>

)


export default Hello;