import React from "react";
import image from "../plant.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="Plant Leaves" className= "absolute object-cover w-full h-full"  />
            <section className ="relative min-h-screen pt-9 lg:pt-33 px-10 py-10">
                <h1 className ="text-lg text-black-200 font-bold cursive leading-none lg:leading-snug home-name "> Writer , Editor</h1>
                <h5 className ="text-sm text-green-400 leading-none lg:leading-snug home-name-smaller  "> & Plant Enthusiast</h5>
            </section>
            
        </main>





    )
       
}