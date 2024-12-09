import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { MdComputer, MdWork } from "react-icons/md"

export const WorkXp = () => {
    return (
        <section className="container my-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="Experiencia" title="Experiência profissional"/>
                <p className="text-gray-400 mt-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error odit distinctio pariatur ea, perspiciatis dicta!
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <ExperienceItem
                title="Freelancer"
                Date="Julho 2024 - O momento"
                Description="Disponível para trabalhos como freelancer, especializado na criação de landing pages otimizadas,
                websites responsivos e aplicativos web modernos, focando em design e funcionalidade."
                Function="Desenvolvedor FullStack"
                techs={['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Node.js', 'Redux']}
                icon= {<MdComputer size={30}/>} 
                url="/"
                />
                <ExperienceItem
                    title="Stella Express"
                    Date="Outubro 2024 - O momento"
                    Description="Desenvolvimento e manutenção de páginas responsivas, bonitas e com funcionalidades para adicionar e remover produtos."
                    Function="Desenvolvedor de Landing Page"
                    techs={['React', 'TypeScript', 'JavaScript', 'Tailwind']}
                    icon={<MdWork size={30} />}
                    url="https://stella-express.vercel.app/"
                />
            </div>
        </section>
    )
}