import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

const ParticleBackground = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadAll(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => ({
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "repulse",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: false,
				},
				modes: {
					grab: {
						distance: 400,
						line_linked: {
							opacity: 1,
						},
					},
					bubble: {
						distance: 400,
						size: 40,
						duration: 2,
						opacity: 8,
						speed: 3,
					},
					repulse: {
						distance: 200,
					},
					push: {
						particles_nb: 4,
					},
					remove: {
						particles_nb: 2,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.4,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 3,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 150,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 4 },
				},
			},
			detectRetina: true,
			fullscreen: false,
			style: {
				position: "absolute",
				width: "100%",
				height: "100%",
				top: 0,
				left: 0,
			},
		}),
		[]
	);

	if (init) {
		return <Particles id="tsparticles" options={options} />;
	}

	return <div></div>;
};

export default ParticleBackground;
