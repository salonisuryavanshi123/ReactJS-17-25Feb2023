import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function Layout() {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}
