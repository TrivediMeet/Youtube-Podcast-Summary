import Footer from '@/components/landing/Footer'
import HeroSection from '@/components/landing/HeroSection'
import Navbar from '@/components/landing/Navbar'
import Pricing from '@/components/landing/Pricing'
import React from 'react'
import { authOptions, CustomSession } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

export default async function page() {

  const session:CustomSession | null = await getServerSession(authOptions)
  return (
    <>
      <Navbar user={session?.user}/>
      <HeroSection/>
      <Pricing user={session?.user}></Pricing>
      <Footer></Footer>
    </>
  )
}


