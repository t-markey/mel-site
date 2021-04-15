import React from 'react';
import "./Footer.css";
import {SocialIcon} from "react-social-icons";

const Footer = () => {
    return(
        <div className = "main-footer">
            <div className = "container">
                <div className = "row footing-centers">
                    {/* Column1 */}
                  
                    {/* Column3 */}
                    <div className= "col cursive2 flex justify-center">
                        <h4></h4>
                        <ul className="list-unstyled mr-4 ">
                            
                            {/* <hr/>
                            <li>Copywring</li>
                            <li>ProofReading</li>
                            <li>Content strategy</li>
                            <hr/>
                            <br/>
                             */}
                            
                            
                        </ul>
                    </div>
                </div>
                {/* <div className="inline-flex py-3 px-3 my-6 "> */}
                <div className="flex justify-center px-3 my-3 ">
                    <SocialIcon url="https://www.linkedin.com/in/melanie-totenberg/" className="mr-4 my-social-icon-foot" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/>
                    <SocialIcon url="mailto:melanie.totenberg@gmail.com" className="mr-4 my-social-icon-foot" target = "_blank" fgColor="#fff" bgColor="currentColor" style = {{height:40, width:40 }}/>
                    
                </div>
                <div className="row">
                    <p className=" footing-center flex justify-center">
                        &copy;{new Date().getFullYear()} Melanie Totenberg | All Rights Reserved | Brooklyn | Ny
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Footer;


{/* <h1>Melanie Totenberg | Brooklyn, NY | melanie.totenberg@gmail.com</h1> */}