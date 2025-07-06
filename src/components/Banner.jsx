import React from "react";
import ParticleBackground from "./ParticleBackground";

function Banner(props) {
	return (
		<div className="banner page-section">
			<div className="bg-overlay">
				<ParticleBackground />
			</div>
			<div className="intro">
				<img src={require("../images/anshdagha.png")} alt="" />
				<h3>Hey! I'am {props.personalData.name}</h3>
				<p>{props.personalData.tagline}</p>
			</div>
		</div>
	);
}

export default Banner;
