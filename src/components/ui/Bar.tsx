"use client"
import { useRouter } from 'next/navigation'
export default function Bar(){
    const router = useRouter()
    return (
        <div className=" flex flex-row gap-6 justify-start cursor-pointer font-semibold ">
            <span className=" hover:underline" onClick={() => router.push('/Blog')}>Blog</span>
        </div>
    )
}