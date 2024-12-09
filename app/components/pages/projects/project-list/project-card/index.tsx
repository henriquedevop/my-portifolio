import Image from "next/image"

export const ProjectCard = () => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800
         hover:border-purple-500 opacity-70 hover:opacity-100 transition-all group">
            <div className="w-full h-48 overflow-hidden">
                <Image 
                width={380}
                height={200}
                alt="foto do projeto"
                unoptimized
                src="https://media.graphassets.com/Y2KgudRf2GdejVPUKXKw"
                className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                />
            </div>

            <div className="flex-1 flex flex-col p-8">
                <strong className="font-medium text-gray-50/90 group-hover:text-purple-500 transition-all">Projeto nome</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aperiam ea eveniet nesciunt
                facere fuga architecto. Minus consequatur dicta repudiandae asperiores. Nemo tempore praesentium voluptates.
                </p>
                <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Next.js,Next.js,Next.js,Next.js,Next.js,Next.js,Next.js</span>
            </div>
        </div>
    )
}