import ConstructionHero from "../src/components/Hero/ConstructionHero";
import TopNavigation from "../src/components/Nav/TopNavigation";
import Equipment from "../src/components/Equipment/equipment";
import Services from "../src/components/Services/services";

const ConstructionHeroComponent = ConstructionHero; // Declare the variable before using it

export default function Page(): JSX.Element {
	return (
		<div className="page-container">
			<TopNavigation />
			<ConstructionHeroComponent />
      <Equipment />
      <Services />
			{/* <div className="page-content"></div> */}
		</div>
	);
}
