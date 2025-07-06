import "../css/skills.css";
import { skillsData } from "../data";

function calculatePercentage(level) {
	const circumference = 2 * Math.PI * 48; // Assuming the radius is 48
	switch (level.toLowerCase()) {
		case "basic":
			return circumference * 0.3 + " " + circumference;
		case "intermediate":
			return circumference * 0.6 + " " + circumference;
		case "advanced":
			return circumference * 0.8 + " " + circumference;
		case "expert":
			return circumference + " " + circumference;
		default:
			return "0%";
	}
}

function Skills() {
	return (
		<div className="skill-container row justify-content-center">
			{skillsData.map((skill, key) => {
				return (
					<div className="skill-body" key={key}>
						<div className="skill-icon">
							<img src={skill.icon} alt="" />
							<div className="progress-bar-container">
								<svg className="progress-bar" viewBox="0 0 100 100">
									<circle className="progress-background" cx="50" cy="50" r="50" />
									<circle className={`progress-bar-value ${skill.level}`} cx="50" cy="50" r="48" style={{ strokeDasharray: `${calculatePercentage(skill.level)} 300` }} />
								</svg>
							</div>
						</div>
						<div className="skill-name text-light">{skill.skillname}</div>
					</div>
				);
			})}
		</div>
	);
}

export default Skills;
