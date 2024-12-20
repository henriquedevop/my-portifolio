import Link from "next/link"
import { ProjectCard } from "./project-card"

export const ProjectList = () => {
    return (
        <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
                <ProjectCard
                description="Este projeto foi criado para resolver uma necessidade real: centralizar os links em um só
                lugar. O usuário pode adicionar seus links em uma página própria e compartilhar o link gerado por nós,
                além de personalizar as cores e os cards de links."
                image="/images/linkorbita.png"
                techs={['React', 'TypeScript', 'JavaScript','Tailwind CSS', 'FireBase']}
                title="Link Òrbita"
                deploy="https://linkorbita.vercel.app/"
                repo="https://github.com/henriquedevop/linkOrbita"
                />
                <ProjectCard
                description="Este projeto foi desenvolvido do zero, tanto na parte de desenvolvimento quanto no design,
                buscando criar uma interface moderna e atrativa para os clientes. A funcionalidade principal é mostrar
                a localização e os produtos disponíveis no estabelecimento."
                image="/images/stellaexpress.png"
                techs={['React', 'TypeScript', 'JavaScript','Tailwind CSS']}
                title="Stella Express"
                deploy="https://stella-express.vercel.app/"
                repo="https://github.com/henriquedevop/stellaExpress"
                />
                <ProjectCard
                description="Crypto Browser é um projeto de estudo que lista as principais criptomoedas do mercado.
                O objetivo é permitir que o usuário visualize informações detalhadas sobre cada moeda, salve suas favoritas
                em uma watchlist, pesquise por nome e alterne entre os modos claro e escuro."
                image="/images/cryptobrowser.png"
                techs={['React', 'TypeScript', 'JavaScript', 'Axios', 'CoinCap API', 'Talwind CSS']}
                title="Crypto Browser"
                deploy="https://crypto-browser-flax.vercel.app/"
                repo="https://github.com/henriquedevop/cryptoBrowser"
                />
                <ProjectCard
                description="Henrique Flix é um projeto de estudo com catálogo de filmes que permite aos usuários pesquisar
                filmes, ver os detalhes, e salvar os favoritos para uma lista que guarda os dados."
                image="/images/henriqueflix.png"
                techs={['React', 'TypeScript', 'JavaScript', 'Axios', 'Tailwind CSS', 'TMDB API']}
                title="Henrique Flix"
                deploy="https://henrique-flix.vercel.app/"
                repo="https://github.com/henriquedevop/henrique-flix"
                />
        </section>
    )
}