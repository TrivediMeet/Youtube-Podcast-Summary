import DashNav from '@/components/dashboard/DashNav'
import React from 'react'
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export default async function dashboard() {
  const session:CustomSession | null = await getServerSession(authOptions)
  
    return (
    <div className='container'>
      <DashNav user={session?.user!} userCoins={null}></DashNav>
    </div>
  )
}
