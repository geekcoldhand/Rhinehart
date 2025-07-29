import ConstructionHero from "../src/components/Hero/ConstructionHero";
import TopNavigation  from "../src/components/Nav/TopNavigation";


const ConstructionHeroComponent = ConstructionHero // Declare the variable before using it

export default function Page(): JSX.Element {
  return (
    <div className="page-container">
      <TopNavigation />
        <ConstructionHeroComponent />
      <div className="page-content">
      </div>
    </div>
  )
}
