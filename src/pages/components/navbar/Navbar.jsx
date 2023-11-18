import { React, useState } from 'react';
import styles from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={styles.navbar}>
      <a href="/" className={styles.home}>Motorbike Rentals</a>
<nav>
  <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu] }>
    <CustomLink href="/bikes">Bikes</CustomLink>
    <CustomLink href="/about">About</CustomLink>
    <CustomLink href="/contact">Contact</CustomLink>
  </ul>
</nav>
<div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
  {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
</div>
      </header>
  );
};

function CustomLink({href, children, ...props}){
  const path = window.location.pathname
  return (
    <li>
      <a href={href} {...props} className={path === href ? "visit" : ""}>{children}</a>
    </li>
  )
}

export default Navbar;