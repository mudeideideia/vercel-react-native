// @generated: @expo/next-adapter@2.1.36
import React, { useState } from 'react';

import Home from '../src/pages/home'
import SignIn from '../src/pages/signIn'

export default function App() {
  const [auth, setAuth] = useState(false)

  const signIn = () => {
    setAuth(true)
  }

  const signOut = () => {
    setAuth(false)
  }
  return auth ? <Home signOut={signOut}/> : <SignIn signIn={signIn} />
}