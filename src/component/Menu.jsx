import React from 'react'
import { Link } from 'react-router-dom'

import style from './Menu.module.css'



const Menu = () => {
  return (
    <div className= {style.container}>
    <ul>
   
    <li className={style.item}>
      <Link to="/dashboard">Grupo</Link>
    </li >
    <li className={style.item}>
      <Link to="/profile">Tropa</Link>
    </li>
    <li className={style.item}>
      <Link to="/settings">Patrula</Link>
    </li>   
    <li className={style.item}>
      <Link to="/teste">Teste</Link>
    </li >
    </ul>
    </div>
  )
}

export default Menu