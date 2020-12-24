import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'firebase'

export type Auth = {
  signin?: (email: string, password: string) => any
  signout?: () => any
  userId: string
}

var firebaseConfig = {
  apiKey: 'AIzaSyASttzDcH8u_buXqu4DQXh8ykf4ZGKxFng',
  authDomain: 'api-challenge-a70e1.firebaseapp.com',
  projectId: 'api-challenge-a70e1',
  storageBucket: 'api-challenge-a70e1.appspot.com',
  messagingSenderId: '68087999930',
  appId: '1:68087999930:web:cc474a61b03ffe94cf4183',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const authContext = createContext<Auth>({
  userId: '',
})
export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const initalUser: any = {}
  const [user, setUser] = useState(initalUser)

  const signin = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response)
        setUser(response.user)
        return response.user
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false)
      })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })

    return () => unsubscribe()
  }, [])

  return {
    userId: user && user.uid,
    signin,
    signout,
  }
}
