import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="bg-purple-100 text-black">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl font-bold">The best URL Shortner in the market</p>
         
            <p>We are the most straight forward URL Shortner in the World</p>
      
          </div>
          <div className="flex justify-start relative">
            <Image className="mix-blend-darken" src={"/vector.jpg"} alt="an image of a vector"  fill={true} /> 
          </div>
        </section>
      </main>
    </>

  );
}
