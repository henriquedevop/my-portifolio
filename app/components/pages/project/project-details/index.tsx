import { Button } from "@/app/components/button"
import { LinkComponent } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badges"
import { FaGlobe } from "react-icons/fa"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { TbBrandGithub } from "react-icons/tb"

export const ProjectDetails = () => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24
        px-6 overflow-hidden">

            <div className="absolute inset-0 z-[-1]"
            style={{
                background: 'url(/images/hero-bg-3.png) no-repeat center/cover, url(https://media.graphassets.com/Y2KgudRf2GdejVPUKXKw) no-repeat center/cover'
            }}
            />

            <SectionTitle subtitle="Projetos" title="nome do projeto" className="text-center items-center sm:[&>h3]:text-4xl"/>

            <div className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni ad totam provident cumque debitis expedita quo sequi!</p>
            </div>

            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
                <TechBadge name="Next.js"/>
            </div>

            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com/henriquedevop" target="_blank">
                <Button className="min-w-[180px]">
                    <TbBrandGithub size={20}/>
                    Repositório
                </Button>
                </a>
                <a href="https://github.com/henriquedevop" target="_blank">
                <Button className="min-w-[180px]">
                    <FaGlobe size={20}/>
                    Repositório
                </Button>
                </a>
            </div>
            
            <LinkComponent href="/projects">
                <HiArrowNarrowLeft size={20}/> 
                Voltar para projetos
            </LinkComponent>

        </section>
    )
}