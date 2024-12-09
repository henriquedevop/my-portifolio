import { LinkComponent } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const PageIntro = () => {
    return (
        <section 
        className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center
        justify-center px-2">

            <SectionTitle 
            subtitle="Projetos" 
            title="Meus projetos"
            className="text-center items-center [&>h3]:text-4xl"
            />

            <div className="flex flex-col items-center">
                <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, saepe inventore porro sed magni 
                    deleniti similique adipisci officia necessitatibus, vel libero sequi assumenda facilis et.
                </p>
                <LinkComponent href="/">
                <HiArrowNarrowLeft size={20}/>
                Voltar para home
                </LinkComponent>
            </div>
            
        </section>
    )
}