import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./know-tech"
import { TbBrandJavascript, TbBrandNextjs, TbBrandReact, TbBrandRedux, TbBrandTailwind, TbBrandTypescript, } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"

export const KnowTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="Competências" title="Conhecimentos"/>
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                    <KnowTech tech={{
                        icon: <TbBrandNextjs/>,
                        name: "Next.js"
                    }}/>
                    <KnowTech tech={{
                        icon: <TbBrandReact/>,
                        name: "React"
                    }}/>
                    <KnowTech tech={{
                        icon: <FaNodeJs/>,
                        name: "Node.js"
                    }}/>
                    <KnowTech tech={{
                        icon: <TbBrandJavascript/>,
                        name: "JavaScript"
                    }}/>
                    <KnowTech tech={{
                        icon: <TbBrandTypescript/>,
                        name: "TypScript"
                    }}/>
                    <KnowTech tech={{
                        icon: <TbBrandRedux/>,
                        name: "Redux"
                    }}/>
                    <KnowTech tech={{
                        icon: <TbBrandTailwind/>,
                        name: "Tailwind"
                    }}/>
            </div>
        </section>
    )
}