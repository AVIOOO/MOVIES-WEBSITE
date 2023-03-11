import React from 'react'
import styles from './styles.module.css'
import {Link } from "react-router-dom"

function Navbar({setisloggedin,isloggedin}) {
    function RenderButton(){
        if(isloggedin == true){
           return <button style={{backgroundColor:"red"}}onClick={()=>{setisloggedin(false)}}>LOGOUT</button>
        }else{
          return  <button  style={{backgroundColor:"green"}}onClick={()=>{setisloggedin(true)}}>LOGIN</button>
        }
    }
  return (
    <div>
<header className={styles.header}>
    <Link to = '/' className={styles.links}>HOME</Link>
    <Link to ='/products' className={styles.links}>  PRODUCT</Link>
    <Link to = './about' className={styles.links}>ABOUT</Link>
    <RenderButton/>


</header>
        
    </div>
  )
}

export default Navbar