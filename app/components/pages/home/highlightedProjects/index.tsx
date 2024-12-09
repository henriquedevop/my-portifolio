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
                techs={['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'FireBase']}
                /> 
                <HorizontalDivider className="my-16"/>

                <ProjectCard
                title="Projeto Stella Express"
                description="Este projeto foi desenvolvido do zero, tanto na parte de desenvolvimento quanto no design,
                buscando criar uma interface moderna e atrativa para os clientes. A funcionalidade principal é mostrar
                a localização e os produtos disponíveis no estabelecimento."
                imageUrl="/images/stellaexpress.png"
                techs={['React', 'JavaScript', 'TypeScript', 'Tailwind CSS']}
                /> 
                <HorizontalDivider className="my-16"/>
                
            </div>
        </section>
    )
}