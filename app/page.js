import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-purple-100 text-black">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">The best URL Shortner in the market</p>
         
            <p className="px-36 my-4">We are the most straight forward URL Shortner in the World. Most of the URL Shortners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortner.</p>

            <li className='flex gap-3'>
                
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1 cursor-pointer text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 font-bold py-1 mr-2 cursor-pointer text-white'>Github</button></Link>
                </li>
      
          </div>
          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" src={"/vector.jpg"} alt="an image of a vector" fill={true} /> 
          </div>
        </section>
      </main>
    </>

  );
}
