import React,{ useState } from 'react';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg'

const NavBar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  const Menu =()=>(
    <>
     <p><a href="#home">Home</a></p>
        <p><a href="#whatgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
  )
  return (  
     <div className='gpt3__navbar'>
      <div className='gpt3__navbar_links'>
      <div className='gpt3__navbar_links_logo'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='gpt3__navbar-links_container'>
        <Menu/>
      </div>
     </div>
     <div className="gpt3__navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign up</button>
     </div>
     <div className='gpt3__navbar-menu'>
      {toggleMenu ? 
      <RiCloseLine color="#FFF" size={27} onClick={()=>setToggleMenu(false)}/>
      :<RiMenu3Line color="#FFF" size={27} onClick={()=>setToggleMenu(true)}/>}
      {
        toggleMenu && 
        (<div className='gpt3__navbar-menu_container scale-up-center'>
          <div className="gpt3__navbar-menu_container_links">
           <Menu/>
           <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        </div>)
      }
     </div>
    </div>
  )
}

export default NavBar
