import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const dispatch= useDispatch();

  useEffect(()=>{
        authService.getCurrentUser()
        .then((userData)=>{
           if(userData){
            dispatch(login({userData}))
           }
           else{
            dispatch(logout())
           }
        })
  },[])

  
  return  (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        
         <Outlet/>
         
        <Footer />
      </div>
    </div>
  ) ;
}

export default App
