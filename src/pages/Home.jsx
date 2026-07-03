import React,{useEffect, useState} from 'react'

// const Home = () => {
//     const name="Tech ai college "
//     const [number, setNum] = useState(0)
//     function handleClick(){ 
//         let sum=number+1
//         setNum(sum)
//     }
//     function subtract(){
//         setNum(number>0 ? number - 1 : number)
//     }
//     useEffect(() =>{
//         console.log("Component mounted")
//     }),[number]

//     useEffect(() =>{
//         console.log("Component updated")
//         return () => {
//             console.log("Component unmounted")
//         }
//     },[])
//   return (
//     <div>
//         <h1>Welcome to  home page {name}</h1>
//         <h2>Count: {number}</h2>
//         <button onClick={handleClick}>Click Me</button>
//         <button onClick={subtract}>Subtract</button>
//     </div>
//   )
    
// }

const Home = () => {
    return (
        <div>
            <h1>Welcome to Home Page</h1>
            <p>This is the home page of our React application.</p>
        </div>
    )
}
export default Home


