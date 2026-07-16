import React from 'react'

export const DataCard = ({ userId, id, title, completed }) => {
  return (
    <div>
      <a href={`/${id}`}>
      <p>{id}, {title} </p>
    </a>
    </div>
  )
}


export default DataCard
