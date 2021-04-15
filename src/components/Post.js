import React, {useState, useEffect } from "react";
import sanityClient from"../client.js";


export default function Post(){
    const[postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                body,
                category,
                mainImage{
                    asset->{
                    _id,
                    url
                },
                alt
            }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
            



    },[]);
    return (
        <main className =" min-h-screen p-12">



            
            <section className="container mx-auto">
                <h1 className= "text-5xl flex justify-center cursive mb-5">Recently Published Works</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-20">Non Profit, Technology & E-Commerce</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {postData && postData.map((post,index)=> (
                    <article >
                      
                        <a target="_blank" rel="noreferrer" href={`https://${post.slug.current}`}>

                        <span className="block h-40 relative rounded shadow-xl leading-snug bg-white border-l-8  border-r-8 border-t-3  border-white-400"
                        key = {index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounder-r object-cover absolute "/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 
                                className=" hover:opacity-100 text-gray-800 text-sml font-blog px-3 py-4 hover:bg-red-400 text-gray-0 bg-opacity-2 rounded hover:text-white ">
                                    {post.title}
                                </h3>

                            </span>
                        </span>
                        </a>
                    </article>
                    ))}
                </div>
            </section>



        </main>


    )






} 