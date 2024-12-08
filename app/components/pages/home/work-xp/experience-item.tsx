import { TechBadge } from "@/app/components/tech-badges"
import { MdWork } from "react-icons/md"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">

            <div className="flex flex-col items-center gap-4">

                <div className=" flex items-center justify-center rounded-full border border-gray-500 p-1">
                    <MdWork size={30}/>
                </div>

                <div className="h-full w-[1px] bg-gray-800"/>

            </div>

            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">Freelancer</a>
                    <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
                    <span className="text-gray-500">nov 2024 - 0 momento (1mes)</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugit et, nostrum doloremque culpa asperiores!
                    </p>
                </div>

                <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                    <TechBadge name="next.js"/>
                </div>

            </div>

        </div>
        
    )
}