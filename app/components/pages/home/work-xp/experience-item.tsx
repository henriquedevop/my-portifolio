import { TechBadge } from "@/app/components/tech-badges"
import { ReactNode } from "react";

interface WorkExProps {
    title: string
    Function: string;
    Date: string;
    Description: string;
    techs: string[]
    icon: ReactNode
    url: string
}

export const ExperienceItem = ({ title, Function, Date, Description, techs, icon, url }: WorkExProps) => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">

            <div className="flex flex-col items-center gap-4">

                <div className=" flex items-center justify-center rounded-full border border-gray-500 p-1">
                    {icon}
                </div>

                <div className="h-full w-[1px] bg-gray-800"/>

            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a target="_blank" href={url} className="text-gray-500 hover:text-green-500 transition-colors">{title}</a>
                    <h4 className="text-gray-300">{Function}</h4>
                    <span className="text-gray-500">{Date}</span>
                    <p>
                        {Description}
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {techs.map((tech) => (
                        <TechBadge name={tech} key={tech}/>
                    ))}
                </div>

            </div>

        </div>
        
    )
}