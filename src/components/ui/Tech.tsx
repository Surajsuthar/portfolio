import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Link } from "lucide-react"
import { Terminal } from 'lucide-react';
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { SiPrisma } from "react-icons/si"
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { SiWeb3Dotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiHono } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa"

import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { FaCloudflare } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa6";

export default function Tech(){
    return(
        <div>
            <Alert className="m-2">
                <Terminal className="h-4 w-4 cursor-pointer"/>
                <AlertTitle className="font-bold underline">Technical Skills</AlertTitle>
                <AlertDescription className="flex gap-2 mt-4">
                    <FaHtml5 size={30}/>
                    <FaCss3Alt size={30}/>
                    <FaNodeJs size={30}/>
                    <SiExpress size={30}/>
                    <FaReact size={30}/>
                    <SiTypescript size={30}/>
                    <SiHono size={30}/>
                    <SiSolidity size={30}/>
                    <SiWeb3Dotjs size={30}/>
                    <RiNextjsLine size={30}/>
                    <TbBrandCpp size={30} />
                    <FaEthereum size={30}/>
                    <SiPrisma size={30}/>
                </AlertDescription >
            </Alert>
            <Alert className="m-2">
                <Terminal className="h-4 w-4 cursor-pointer"/>
                <AlertTitle className="font-bold underline">Database </AlertTitle>
                <AlertDescription className="flex gap-2 mt-4">
                    <SiMysql size={30} />
                    <SiPostgresql size={30} />
                    <DiMongodb size={30} />
                </AlertDescription >
            </Alert>
            <Alert className="m-2">
                <Terminal className="h-4 w-4 cursor-pointer"/>
                <AlertTitle className="font-bold underline">Tools</AlertTitle>
                <AlertDescription className="flex gap-2 mt-4">
                    <FaDocker size={30} />
                    <FaGitAlt size={30} />
                    <SiPostman size={30} />
                </AlertDescription >
            </Alert>
            <Alert className="m-2">
                <Terminal className="h-4 w-4 cursor-pointer"/>
                <AlertTitle className="font-bold underline">Cloud</AlertTitle>
                <AlertDescription className="flex gap-2 mt-4">
                    <FaAws size={30} />
                    <FaCloudflare size={30} />
                </AlertDescription >
            </Alert>
        </div>
    )
}