import React, { useState } from 'react'
import { useAuth } from '../../utils/auth'
import { WrapperLogin, Title, ContentForm, Input, Label, Button } from './style'
import Router from 'next/router'

const LoginView = () => {
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    auth.signin &&
      auth
        .signin(email, password)
        .then(() => {
          Router.push('/home')
        })
        .catch((error: any) => {
          console.log('Error')
        })
  }

  return (
    <WrapperLogin>
      <Title>Login</Title>
      <ContentForm>
        <Input
          type="text"
          name="username"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Label>Username</Label>
      </ContentForm>
      <ContentForm>
        <Input
          type="password"
          name="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Label>Password</Label>
      </ContentForm>

      <Button
        onClick={() => {
          handleLogin()
        }}
      >
        Login
      </Button>
    </WrapperLogin>
  )
}

export default LoginView
