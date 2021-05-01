import React from 'react';
import "./Footer.css";
import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return(
        <div className = "main-footer">
            <div className = "container flex  footing-center justify-center ">
                
                
                <div className="row  flex justify-center ">
                    <p >
                        &copy;{new Date().getFullYear()} Melanie Totenberg | All Rights Reserved | Brooklyn | NY
                    </p>
                </div>
                <div className=" px-3 my-3 ">
                    <SocialIcon url="https://www.linkedin.com/in/melanie-totenberg/" className="mr-4 my-social-icon-foot" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/>
                    <SocialIcon url="mailto:melanie.totenberg@gmail.com" className="my-2 mr-4 my-social-icon-foot" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/> 
                </div>

            </div>
        </div>
    )
}

export default Footer;


