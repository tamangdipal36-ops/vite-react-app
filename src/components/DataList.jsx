import React from 'react'
import {data}from '../Data/data'
import DataCard from './DataCard'
const  DataList=()=> {
    
  return (
    <div>
        {
    data.map((d,i)=> <DataCard
    userId={d.userId}
    id={d.id}
    title={d.title}
    completed={d.completed}
    key={i}
    /> ) 
        }

    
    </div>
  )

}
export default DataList 