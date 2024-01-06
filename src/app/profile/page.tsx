import { getServerSession } from 'next-auth'
import React from 'react'
import options from '../api/auth/[...nextauth]/options'
import Loading from '@/sharedcomponents/Loading'

const ProfilePage = async () => {
  const session = await getServerSession(options)
  if (session && session.user) {
    return <div>You are signed in as {session.user.email}</div>
  }
  return (
    <Loading />
  )
}

export default ProfilePage