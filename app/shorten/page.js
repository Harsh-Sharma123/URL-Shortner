"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const page = () => {

    const [url, seturl] = useState("");
    const [shorturl, setShortUrl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = () => {
        // const myheaders = new Headers();
        // myheaders.append({'Content-Type': 'application/json'});

        const raw = JSON.stringify({
            "url": url,
            "shortUrl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                result = JSON.parse(result);
                if(result.success){
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                    seturl("");
                    setShortUrl("");
                }else{
                    alert("Short URL is already Configured. Try some other short URL !!")
                }
            })
            .catch((error) => console.log(error));
    }

  return (
    <div className='mx-auto max-w-lg  bg-purple-100 myy-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-black text-2xl'>Generate your short URLs</h1>
        <div className='flex flex-col gap-3'>
            
            <input
             className='px-4 py-2 focus:outline-purple-600 rounded-md'
             type="text" 
             value={url}
             placeholder='Enter your URL' 
             onChange={(e)=>{seturl(e.target.value)}}
             ></input>

            <input 
            className='px-4 py-2 focus:outline-purple-600 rounded-md'
            type='text' 
            value={shorturl}
            placeholder='Enter your preferred short url text'
            onChange={(e) => {setShortUrl(e.target.value)}}
            ></input>
            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 text-white font-bold my-3' onClick={generate}>Generate</button>
            
            {generated && <>
            <span className='font-bold text-xl'>
            Your Short URL is :
            </span>
            <code>
                <Link target="_blank" href={generated} onClick={()=>setGenerated("")}>{generated}</Link>    
            </code>
            </>}
        </div>
    </div>
  )
}

export default page;