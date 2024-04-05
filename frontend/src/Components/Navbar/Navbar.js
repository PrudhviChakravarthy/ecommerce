import React from 'react'
import "./Navbar.css"
import logo from "../../static/images/logo.png"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='Logohandle'>
            <img src={logo} className='logo'></img>
            <p>Pet Shop</p>
        </div>
        <div className='navbarselection'>
            <ul>HOME</ul>
            <ul>CATEGORIES</ul>
            <ul>CONTACT</ul>
            <ul>ABOUT US</ul>
        </div>
        <div className='userproducts'>
            <i className="fa-solid fa-cart-shopping addtocart"></i>
            <i class="fa-solid fa-heart"></i>
        </div>
        <div>
            <div>profile pic (or) no pic</div>
            <div>signup/login</div>
        </div>
    </div>
    )
}
