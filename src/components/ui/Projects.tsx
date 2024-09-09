import { Link } from 'lucide-react';
import Image from 'next/image';

const Projects = [
    {
        title : "EVENT MANAGEMENT",
        descripation : "Designed and developed a comprehensive Event Manager application enabling users to create, update, edit,and delete events, providing seamless event management functionality.",
        link : "https://event-clow.netlify.app/",
        imgLink : "/pro1.png"
    },
    {
        title : "URL SHORTENER",
        descripation : "Developed a basic URL shortener application to convert long URLs into short, easily shareable links.",       
        link : "",
    },
    {
        title : "BLOGIFY",
        descripation : "Developed a platform for users to share insightful content, fostering a community of engaged writers andreaders.",        
        des1 : "Implemented a serverless backend using Cloudflare Workers, gaining experience with serverless architectures and RESTful API integration.",
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "Tweeter smart contract",
        descripation : "I learned how smart contracts work on the blockchain. These are like small programs that run automatically and don’t need anyone to control them, making everything more secure and trustworthy",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "DAO smart contract",
        descripation : "I learned that smart contracts are the backbone of a DAO. These contracts define all the rules and processes—how members can join, propose ideas, vote, and how funds are managed. They make sure the system is fair and transparent",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "Queue Based on rate limite Api",
        descripation : "Implement a queueing system to ensure that tasks are processed according to the rate limit for each user ID.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
    {
        title : "School Distance Api",
        descripation : "Implement a set of APIs using Node.js, Express.js framework, and MySQL to manage school data. The system allow users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.",        
        link : "https://github.com/Surajsuthar/Blogify",
    },
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
                                                <p className="mt-2">{project?.des1}</p>
                                            </div>
                                            <div className=" flex gap-2 mt-2">
                                    
                                            </div>
                                        </div>
                                        <div>
                                            {project.imgLink ? <Image alt='not found' src={project.imgLink} height={500} width={1150} /> : ""}
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