import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badges";
import Image from "next/image"
import Link from "next/link";
import { TbBrandGithub, TbWorld } from "react-icons/tb";

interface ProjectCardProps {
    image: string
    title: string;
    description: string;
    techs: string[]
    repo: string
    deploy: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techs, deploy, repo }) => {
    return (
            <div className="block min-w-full sm:max-w-sm bg-gray-800 p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover" 
                        className="rounded-lg"
                        priority 
                    />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>
                <div className="flex justify-between">
                <Button className="mt-6">
                    <a className="flex items-center" target="_blank" href={repo}>
                        <TbBrandGithub size={20}/>
                        Repositorio
                    </a>
                </Button>
                <Button className="mt-6">
                    <a className="flex items-center" target="_blank" href={deploy}>
                        <TbWorld size={20}/>
                        Veja o site!
                    </a>
                </Button>
                </div>
            </div>
    )
}
