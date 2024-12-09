import Image from "next/image"
import { TechBadge } from "../../../tech-badges"
import { Button } from "@/app/components/button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb"

const MOCK_CONTACTS = [
    {url: "https://github.com/henriquedevop", icon: <TbBrandGithub/>},
    {url: "https://www.linkedin.com/in/g-henrique-/", icon: <TbBrandLinkedin/>},
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeate flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">

            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">

                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-green-300 text-sm mb-4">{'[~/Gustavo/Geral]'}</p>
                    <p className="font-mono text-green-400">Olá, meu nome é</p>
                    <h2 className="text-5xl font-medium mt-2">Gustavo Henrique</h2>

                    <p className="text-gray-400 my-6 text-base sm:text-lg font-mono">
                    Estou pronto para <strong>transformar suas ideias em soluções digitais eficientes,</strong> com interfaces acessíveis,
                     modernas e focadas na melhor usabilidade para os usuários.
                    </p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
                        {Array.from({length: 5}).map((_,index) => (
                            <TechBadge name="Next.js"/>
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="shadow-button w-max duration-300">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
                            {MOCK_CONTACTS.map((contact, index) => (
                                <a
                                href={contact.url}
                                key={`contact-${index}`}
                                target="_blank"
                                className="hover:text-gray-100 transition-colors"
                                > 
                                {contact.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                
                <Image
                width={302}
                height={304}
                src={"/images/profilepic2.jpeg"}
                alt="Foto de perfil de Gustavo"
                unoptimized
                className="w-[300px] h-[300px] lg:w-[370px] lg:h-[384px] grayscale hover:grayscale-0 hover:scale-105 transition-all
                duration-500 mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
                />

            </div>

        </section>
    )
}