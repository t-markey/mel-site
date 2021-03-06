import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-#fff-800 ">
            <div className="container mx-auto flex justify-between ">
                <nav className = "flex">

                    <NavLink to ="/"
                    exact
                    activeClassName= "text-white"
                    className =" mobilemenu inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-5xl font-bold cursive tracking-widest ">
                        Melanie Totenberg
                    </NavLink>
                    <NavLink to ="/portfolio" 
                  
                    className="mobilemenusub inline-flex items-center py-1 px-3 my-1 rounded text-white hover:text-black text-2xl "
                    >
                        Portfolio
                    </NavLink>
                    <NavLink to ="/about" 
                    
                    className="mobilemenusub inline-flex items-center py-1 px-3 my-1 rounded text-white hover:text-black text-2xl">
                        About
                    </NavLink>
                    <a href ="mailto:melanie.totenberg@gmail.com"  target="_blank " rel="noreferrer"
                    className=" mobilemenusub inline-flex items-center py-1 px-3 my-1 rounded text-white hover:text-black  text-2xl">
                        Contact
                    </a>

                </nav>
                <div className="inline-flex py-3 px-3 my-6 ">
                    <SocialIcon url="https://www.linkedin.com/in/melanie-totenberg/" className="mr-4 my-social-icon" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/>
                    <SocialIcon url="mailto:melanie.totenberg@gmail.com" className="mr-4 my-social-icon" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/>
                    
                </div>
            </div>
        </header>

















    )
}