"use client"
import { Mail } from 'lucide-react';

export default function Hero(){

    const email = 'surajsuthar0067@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
          alert('Email copied to clipboard!');
        }).catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className=" flex flex-row gap-2 ">
            <div className=" flex flex-col flex-wrap gap-1">
                <div className="text-[60px] font-black">I'm Suraj</div>
                <div className=' text-xl'> Aspiring software engineer</div>
                <p className='mt-2 text-l'>
                Enthusiastic and detail-oriented fresher with a basic understanding of backend development and a keen interest in Web3 and blockchain technologies. Looking to apply skills in Node.js, databases, and blockchain frameworks to contribute to projects and learn from experienced teams. Seeking opportunities to grow knowledge and work on creative solutions in the field of decentralized systems
                </p>
                <span onClick={handleCopy} className=' mt-2 flex gap-1 hover:cursor-pointer hover:underline'><Mail/>{email}</span>
            </div>
            <img src="/img.png"  className=" rounded-full h-[210px] w-[210px]"/>
        </div>
    )
}