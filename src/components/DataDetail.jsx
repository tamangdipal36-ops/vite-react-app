import React from 'react'
import { useParams } from 'react-router'
import { data } from '../Data/data'
const DataDetail = () => {
  const { id } = useParams()
  const currentData = data.find((d) => d.id === parseInt(id))//or use == then doesnot need to parseInt
  console.log("currentData", currentData)
  return (
    <div>
      Data Detail { currentData ? currentData?.title : "Data not found"}
    </div>
  )
}

export default DataDetail
