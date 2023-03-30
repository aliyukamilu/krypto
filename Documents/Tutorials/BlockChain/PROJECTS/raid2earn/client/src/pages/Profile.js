import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const { address } = useParams()
  return (
    <div>Profile {address}</div>
  )
}

export default Profile