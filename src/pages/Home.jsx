import "../index.css";
import "../css/layout.css";
import "../css/style.css";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Titles from "../components/Titles";
import Timeline from "../components/Timeline";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Skills from "../components/Skills.jsx";
import Certifications from "../components/Certifications";

import { personalData, timelineData, socialData } from "../data.js";

function Home() {
	return (
		<>
			<Navbar title={personalData.name} />
			<Banner personalData={personalData} />

			<section id="section-timeline" className="page-section">
				<Timeline timelineData={timelineData} />
			</section>

			<section id="section-skills" className="page-section">
				<Titles title="Skills" titleDesc="" />
				<Skills />
			</section>

			<section id="section-certifications" className="page-section">
				<Titles title="Certifications" titleDesc="" />
				<Certifications />
			</section>

			<section id="section-projects" className="page-section">
				<Titles title="Projects" titleDesc="Coming soon..." />
			</section>

			<section id="section-education" className="page-section">
				<Titles title="My Education" titleDesc="I have graduated with a B.Tech in Computer Engineering from the University of Mumbai." />
				<Education />
			</section>

			<Footer title={personalData.name} socialData={socialData} />
			<div className="credits">~ Developed by Ansh Dagha </div>
		</>
	);
}

export default Home;
