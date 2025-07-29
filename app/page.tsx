import ConstructionHero from "../src/components/Hero/ConstructionHero";
import TopNavigation from "../src/components/Nav/TopNavigation";
import Equipment from "../src/components/Equipment/equipment";
import Services from "../src/components/Services/services";
import Partners from "../src/components/Partners/partners";
import About from "../src/components/About/about";
import CTA from "../src/components/CallToAction/call-to-action";
import Footer from "../src/components/Footer/footer";

const ConstructionHeroComponent = ConstructionHero; // Declare the variable before using it

export default function Page(): JSX.Element {
	return (
		<div className="page-container">
			<TopNavigation />
			<ConstructionHeroComponent />
      <Equipment />
      <Services />
      <Partners />
      <About />
      <CTA />
      <Footer />
			{/* <div className="page-content"></div> */}
		</div>
	);
}
