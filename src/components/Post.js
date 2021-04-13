import React, {useState, useEffect } from "react";
import sanityClient from"../client.js";
import { Link } from 'react-router-dom';

export default function Post(){
    const[postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                body,
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
        <main className ="bg-gray-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className= "text-5xl flex justify-center cursive">Recently Published Works</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Non Profit, Technology & E-Commerce</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=> (
                    <article>
                      
                        <a href={`https://${post.slug.current}`}>

                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                        key = {index}>
                            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-full h-full rounder-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-gray-200 text-sml font-blog px-3 py-4 bg-red-400 text-red-100 bg-opacity-33 rounded">
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