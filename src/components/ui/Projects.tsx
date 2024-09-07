import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { px } from "framer-motion";
import { Link } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const Projects = [
    {
        title : "EVENT MANAGEMENT",
        descripation : "Designed and developed a comprehensive Event Manager application enabling users to create, update, edit,and delete events, providing seamless event management functionality.",
        link : "https://event-clow.netlify.app/",
        imgLink : "./img.png"
    },
    {
        title : "URL SHORTENER",
        descripation : "Developed a basic URL shortener application to convert long URLs into short, easily shareable links.",       
        link : "",
    },
    {
        title : "BLOGIFY",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "Tweeter smart contract",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "DAO smart contract",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "Queue Based on rate limite Api",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "School Distance Api",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
]

export default function Project(){
    return (
        <div className="flex flex-col justify-center">
            <div className=" flex-1  justify-evenly gap-2 mt-2">
                {
                    Projects.map((project) => {
                        return(
                            <div className="flex flex-col border-black border-[1px] p-2 mt-2">
                                <div className="flex flex-row gap-2">
                                    <div className="flex justify-start gap-2 mt-1.5">
                                            <a href={project.link} className=" cursor-pointer" target="_blank"><Link className="h-4 w-4"/></a>
                                        </div>
                                        <div>
                                            <p className=" text-xl underline">{project.title}!</p>
                                            <p className="mt-2">{project.descripation}</p>
                                            <div className=" flex gap-2 mt-2">
                                                <FaReact size={24}/>
                                                <SiTypescript size={24}/>
                                                <FaNodeJs size={24}/>
                                            </div>
                                        </div>
                                        <div>
                                            {project.imgLink ? <img src={project.imgLink}/> : ""}
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