import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlightedProjects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkXp } from "./components/pages/home/work-xp";

export default async function Home() {
  return (
    <>
      <HeroSection/>
      <KnowTechs/>
      <HighlightedProjects/>
      <WorkXp/>
    </>
  )
}
