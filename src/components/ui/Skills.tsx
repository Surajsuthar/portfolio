import IconCloud from "../magicui/icon-cloud"

const slugs = [
    "typescript",
    "javascript",
    "solidity",
    "blockchain",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
    "etherium",
    "web3dotjs"
  ];

export default function Skills(){
    return (
        <div>
            <IconCloud iconSlugs={slugs}/>
        </div>
    )
}