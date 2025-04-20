import { Navbar } from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="bg-green-50">
            <p>The best URL Shortner in the market</p>
          {/* <div> */}
            <p>We are the most straight forward URL Shortner in the World</p>
          {/* </div> */}
          </div>
          <div className="bg-red-500 flex justify-start relative">
            <Image src={"/vector.jpg"} alt="an image of a vector"  fill={true} /> 
          </div>
        </section>
      </main>
    </>

  );
}
