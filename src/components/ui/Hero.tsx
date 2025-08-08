"use client"
import { Mail } from 'lucide-react';
import { toast } from "sonner"
import Image from 'next/image';
import Sidebar from "./Sidebar"

export default function Hero(){

    const email = 'surajsuthar0067@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            toast("Email copied !")
        }).catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className=" flex flex-row gap-2 ">
            <div className=" flex flex-col flex-wrap gap-1">
                <div className="text-[60px] font-black">Hey👋, I{"'"}m Suraj</div>
                <div className=' text-xl'> software engineer</div>
                <p className='mt-2 text-l'>
                I'm Surajmal Suthar — an enthusiastic and detail-oriented fullstack developer with 8 months of hands-on experience in building scalable real-world systems. With a strong foundation in Node.js, databases, and API design, I'm eager to contribute to impactful projects, learn from experienced teams, and build creative, high-performance solutions.
                </p>
                <div className='flex gap-5 mt-2'>
                    <span onClick={handleCopy} className=' mt-2 hover:cursor-pointer '>
                        <Mail/>    
                    </span>
                    <Sidebar/>
                    
                </div>
            </div>
            <Image src="/img.png" alt='Not found'  width={210} height={210}  className=" rounded-full h-[210px] w-[210px]"/>
        </div>
    )
}