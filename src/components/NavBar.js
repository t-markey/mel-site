import React from "react"
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-red-400">
            <div className="container mx-auto flex justify-between">
                <nav className = "flex">

                    <NavLink to ="/"
                    exact
                    activeClassName= "text-white"
                    className ="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-100 text-4xl font-bold cursive tracking-widest">
                        Melanie Totenberg
                    </NavLink>
                    <NavLink to ="/portfolio" 
                    activeClassName= "text-white"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink to ="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white">
                        About
                    </NavLink>
                    <NavLink to ="/contact" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white">
                        Contact
                    </NavLink>

                </nav>
                <div className="inline-flex py-3 px-3 my-6 ">
                    <SocialIcon url="https://www.linkedin.com/in/melanie-totenberg/" className="mr-4" target = "_blank" fgColor="#fff" bgColor="#ff8080" style = {{height:35, width:35 }}/>
                    <SocialIcon url="mailto:melanie.totenberg@gmail.com" className="mr-4" target = "_blank" fgColor="#fff" bgColor="#ff8080" style = {{height:35, width:35 }}/>
                    
                </div>
            </div>
        </header>

















    )
}