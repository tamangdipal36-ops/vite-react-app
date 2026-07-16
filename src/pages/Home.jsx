// import React,{useEffect, useState} from 'react'

//  const Home = () => {
//      const name="Tech ai college ";

//       const [number, setNum] = useState(0)
//      function handleClick(){ 
//          let sum=number+1
//          setNum(sum)
//      }
//      function subtract(){
//          setNum(number>0 ? number - 1 : number)
//      }
//      useEffect(() =>{
//          console.log("Component mounted")
//      }),[number]

//      useEffect(() =>{
//          console.log("Component updated")
//          return () => {
//              console.log("Component unmounted")
//          }
//      },[])
//    return (
//      <div>
//          <h1>Welcome to  home page {name}</h1>
//          <h2>Count: {number}</h2>
//          <button onClick={handleClick}>Click Me</button>
//          <button onClick={subtract}>Subtract</button>
//      </div>
//    )
  
//  }
//  export default Home


import React from 'react'
import DataList from '../components/DataList'
function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <DataList />

    </div>
  )
}

export default Home





