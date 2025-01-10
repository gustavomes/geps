import React from 'react'
import style from './Home.module.css'
import Navbar from '../component/NavBar';
import LoginForm from '../component/LoginForm';
import Login from '../component/Login';


const Home= () => {
  return (
    <>
    <Login />
    <div className={style.containerHome}>
    </div>
    </>
  )
}

export default Home
