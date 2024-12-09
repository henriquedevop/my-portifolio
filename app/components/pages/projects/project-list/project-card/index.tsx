import { TechBadge } from "@/app/components/tech-badges";
import Image from "next/image"
import Link from "next/link";

interface ProjectCardProps {
    image: string
    title: string;
    description: string;
    techs: string[]
    href: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techs, href }) => {
    return (
        <Link href={href} passHref>
            <div className="block max-w-xs sm:max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative w-full h-64 mb-4">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"  // Preencher o div com imagem
                        objectFit="cover" // Manter as proporções e cobrir a área
                        className="rounded-lg"
                        priority 
                    />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>
            </div>
        </Link>
    )
}
