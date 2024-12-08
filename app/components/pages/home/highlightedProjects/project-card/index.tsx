import { LinkComponent } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badges"
import Image from "next/image"
import Link from "next/link"
import { FaFolder } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
    return (
        <div className="flex gap-6 sm:gap-12 flex-col sm:flex-row">
            <div className="w-full h-full">
                <img
                width={420}
                height={340}
                alt="image do projeto"
                src="https://media.graphassets.com/Y2KgudRf2GdejVPUKXKw"
                className="w-full h-[200px] sm:h-[300px] lg:w-[420px] sm:min-h-full object-cover rounded-lg"
                />
            </div>
            <div>

                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <FaFolder size={20} color="green"/>
                    Projeto
                </h3>

                <p className="text-gray-400 my-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat at eaque vero quae iure quasi 
                    molestias dignissimos iste eos, totam possimus, delectus ipsa unde officia laborum. Odio incidunt,
                    blanditiis quam tenetur quisquam sit voluptatibus quasi quas saepe, vitae soluta nisi natus fugiat
                    optio minima fuga aperiam sapiente nemo nulla sequi.
                </p>

                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 sm:max-w-[350px]">
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                    <TechBadge name="Next.js"/>
                </div>

                <LinkComponent href="/projects/projeto1" >
                    Ver projeto
                    <HiArrowNarrowRight />
                </LinkComponent>

            </div>

        </div>
    )
}