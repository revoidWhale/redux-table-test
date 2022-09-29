import React from 'react'
import { useParams } from 'react-router-dom'

function ProjectId() {
  let { id } = useParams()

  return (
    <div>
      <h3>Project Id: {id}</h3>
    </div>
  )
}

export default ProjectId
