import { HorizontalDivider } from "@/app/components/divider/horizontal"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { LinkComponent } from "@/app/components/link"
import { HiArrowNarrowRight } from "react-icons/hi"

export const HighlightedProjects = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="Projetos" title="Projetos em destaque"/>
            <HorizontalDivider className="mb-16"/>
            
            <div>
                <ProjectCard
                title="Projeto Link Òrbita"
                description="Este projeto foi criado para resolver uma necessidade real: centralizar os links em um só
                lugar. O usuário pode adicionar seus links em uma página própria e compartilhar o link gerado por nós,
                além de personalizar as cores e os cards de links."
                imageUrl="/images/linkorbita.png"
                projectLink="/projects/linkorbita"
                techs={['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'FireBase']}
                /> 
                <HorizontalDivider className="my-16"/>
                
                <p className="flex items-center gap-1.5">
                    <span className="text-gray-400">
                        Se interessou?
                    </span>
                    <LinkComponent href="/projects" className="inline-flex">
                        Ver todos
                        <HiArrowNarrowRight/>
                    </LinkComponent>
                </p>
            </div>
        </section>
    )
}