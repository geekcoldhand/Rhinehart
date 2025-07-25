import ConstructionHero from "../src/components/ConstructionHero"
import { TopNavigation } from "../src/components/TopNavigation"

import "../src/styles/construction-hero.css";
import "../src/styles/navigation.css"

const ConstructionHeroComponent = ConstructionHero // Declare the variable before using it

export default function Page(): JSX.Element {
  return (
    <div className="page-container">
      <TopNavigation />
      <div className="page-content">
        <ConstructionHeroComponent />
      </div>
    </div>
  )
}
