import React, {useEffect, useState}from "react";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import selfie from "../selfie.png";
 
// const builder = imageUrlBuilder(sanityClient);
//         function urlFor(source){
//         return builder.image(source);
//         }



export default function About(){
        const [author, setAuthor]= useState(null);

        
        useEffect(() => {
            sanityClient
                .fetch(
                    `*[_type =="author"]{
                        name,
                        bio,
                        "authorImage": image.asset->url
                    }`
                )
                .then((data) => setAuthor(data[0]))
                .catch(console.error);
                }, []);

         if(!author)return <div>Loading..</div>
    return (
        <main>

          
            <body>
                <div>
            {/* <h1 className =" text-algign:righttext-lg text-black-200  cursive leading-none lg:leading-snug home-name "> Writer & Proofreader</h1> */}
            <div className = "fixmobiletitles">
            <h1 className ="cursive3 text-xlg text-black mb-4 center mr-20">Writer & Proofreader</h1>
            </div>
                </div>
                

       
                    <div className="othercontainer">
                    <div className="holdingcontainer">
                    
                    

                        
                        <div className="internalcontainerL">
                        <img src = {selfie} alt = "Melanie " className="rounded photo-resize shadow-xl" />
                        </div>
                        <div className="internalcontainerR">
                        <h1 className ="cursive text-xlg text-black mb-4">About : </h1>
                        <div className="cursive2 lg:prose-l text-black  ">
                        {/* <BlockContent blocks ={author.bio} projectId="9xv13v3v" dataset="production"/> */}
                        <span>Melanie Totenberg is a self-professed word nerd and casual jigsaw puzzler. She has worked for a mix of small to midsize branding and public relations agencies helping to develop corporate thought leadership. She has a passion for crafting words to create messages that have an impact.</span>
                        <br/>
                        <br/>
                        <span>As an independent content strategist/writer, Melanie has worked with companies in the e-commerce, tech, and nonprofit sectors helping them to tell their stories in their messaging.</span>
                        </div>
                        </div>
                        
                    
                    
            

                    </div>
                    </div>
                
                    
                    
            </body>
        </main>





    );
}