import React from 'react'

export default   function Contact({ name, location, classes }) {
    return (
        <div>
            <div>Contact {name}</div>
            <div>lOCATION {location}</div>
            <Test class={classes}/>
        </div>
    )
}





export function Test(props) {
    return (
        <div>Class {props.class}</div>
    )
}
