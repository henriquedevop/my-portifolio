import { LinkComponent } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badges"
import Image from "next/image"
import { FaFolder } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    projectLink: string
    techs: string[]
}

export const ProjectCard = ({ title, description, imageUrl, projectLink, techs }: ProjectCardProps) => {
    return (
        <div className="flex gap-6 sm:gap-12 flex-col sm:flex-row">
            <div className="w-full h-full">
                <Image
                width={420}
                height={340}
                alt={`Image do projeto ${title}`}
                src={imageUrl}
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] sm:min-h-full object-cover rounded-lg"
                unoptimized
                />
            </div>
            <div>

                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <FaFolder size={20} color="green"/>
                    {title}
                </h3>

                <p className="text-gray-400 my-6">
                    {description}
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 sm:max-w-[350px]">
                    {techs.map((tech) => (
                        <TechBadge key={tech} name={tech}/>
                    ))}
                </div>

                <LinkComponent href={projectLink} >
                    Ver projeto
                    <HiArrowNarrowRight />
                </LinkComponent>

            </div>

        </div>
    )
}