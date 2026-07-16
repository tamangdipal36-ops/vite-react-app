import React ,{useState,useEffect} from 'react';

export default   function Contact({ name, location, classes }) {
   const [isOpen,setopen]=useState(false)
   if(isOpen){
    return <div>
<div>Contact{name}</div>
<div>LOCATION{location}</div>

<Test Class={classes}/>
<button onClick={()=> setopen(false)}>Close</button>
    </div>
   }

   return <div>
    This is my contact page!
    <button onClick={()=> setopen(true)}>Open</button>
   </div>
}
export function Test(props){
    return(
        <div> Class{props.classes}</div>
    )
}

   
   
   
   
   
   
   
   
   
   