import Link from "next/link"
import { ProjectCard } from "./project-card"

export const ProjectList = () => {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
            <Link href="/project/nomedoprojeto">
                <ProjectCard/>
            </Link>
        </section>
    )
}