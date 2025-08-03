import { Link } from 'lucide-react';
import Image from 'next/image';

const Projects = [
    {
        title : "Dev Notify",
        descripation : "DevNotify is a web application that helps developers stay updated on issues from their starred GitHub repositories.",       
        link : "https://devnotify.in",
    },
    {
        title : "Record-me",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/record-me",
    },
    {
        title : "Handle-it",
        descripation : "An AI-powered content creation platform that helps you generate engaging posts and automatically publishes them across your connected social media accounts — all in one place.",        
        link : "https://github.com/Surajsuthar/handle-it",
    },
    {
        title : "Appoint",
        descripation : "A next-generation appointment booking system designed for speed, flexibility, and automation — offering real-time scheduling, smart reminders, calendar integration, and seamless client experiences across web and mobile.",        
        link : "https://github.com/Surajsuthar/appoint",
    },
    {
        title : "EVENT MANAGEMENT",
        descripation : "Designed and developed a comprehensive Event Manager application enabling users to create, update, edit,and delete events, providing seamless event management functionality.",
        link : "https://event-clow.netlify.app/",
    }
]

export default function Project(){
    return (
        <div className="flex flex-col justify-center">
            <div className=" flex-1  justify-evenly gap-2 mt-2">
                {
                    Projects.map((project,id) => {
                        return(
                            <div key={id} className="flex flex-col border-black border-[1px] p-2 mt-2">
                                <div className="flex flex-row gap-2">
                                    <div className="flex justify-start gap-2 mt-1.5">
                                            <a href={project.link} className=" cursor-pointer" target="_blank"><Link className="h-4 w-4"/></a>
                                        </div>
                                        <div className=" flex flex-col justify-between">
                                            <div>
                                                <p className=" text-xl font-semibold">{project.title}!</p>
                                                <p className="mt-2">{project.descripation}</p>
                                            </div>
                                            <div className=" flex gap-2 mt-2">
                                    
                                            </div>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* {
                    Projects.map((project) =>{
                        return (
                            <Alert className="m-2 border-[1px] border-black">
                                <Link className="h-4 w-4 cursor-pointer"/>
                                <AlertTitle className="font-bold underline">{project.title}!</AlertTitle>
                                <AlertDescription className="mt-4">
                                    {project.descripation}
                                </AlertDescription>
                                <AlertDescription>
                                You can add components and dependencies to your app using the cli. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus magnam, dolore quia, modi ad dolorum, tenetur eligendi maxime ipsam perferendis est. Nisi eum dolore numquam fugit, optio culpa perferendis eius?
                                </AlertDescription>
                            </Alert>
                        )
                    })
                } */}
            </div>
        </div>
    )
}