import React from 'react'
import './SignUpPage.scss'
import { SignUp } from '@clerk/clerk-react'


function SignUpPage() {
  return (
    <div>
      <SignUp signInUrl='/login' routing='path' path="/signup" />
    </div>
  )
}

export default SignUpPage
