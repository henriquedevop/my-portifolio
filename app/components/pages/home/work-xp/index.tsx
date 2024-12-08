import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"

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
                <ExperienceItem/>
                <ExperienceItem/>
            </div>
        </section>
    )
}