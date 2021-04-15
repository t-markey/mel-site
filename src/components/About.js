import React, {useEffect, useState}from "react";
import sanityClient from "../client.js";
import pretty from "../plant.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import selfie from "../selfie.png";
 
const builder = imageUrlBuilder(sanityClient);
        function urlFor(source){
        return builder.image(source);
        }



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
                // .catch(console.error);
                }, []);

         if(!author)return <div>Loading..</div>
    return (
        <main>
          
            <body>
                    <div className="holdingcontainer">


            
                        <div className="internalcontainerL">
                        <img src = {selfie} alt = "Melanie Photo" className="rounded photo-resize" />
  
                        </div>


                        <div className="internalcontainerR">
                        <h1 className ="cursive text-xlg text-black mb-4">About : </h1>
                        <div className="cursive2 lg:prose-l text-black ">
                        <BlockContent blocks ={author.bio} projectId="9xv13v3v" dataset="production"/>
                        </div>
                        </div>
                    
                    
            

                    </div>
                    
                    
                    
                
       
            </body>
        </main>





    );
}