import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nati=useNavigate()
const onsubmit=()=>{
nati('/dashboard')
}

  return (
    <div>
      <h1>login page</h1>
      <button onClick={onsubmit}>login</button>
    </div>
  )
}

export default Login
