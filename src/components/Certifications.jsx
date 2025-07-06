import { certificationsData } from "../data";
import "../css/certifications.css";

function Certifications() {
	return (
		<div className="certifications-container row justify-content-center">
			{certificationsData.map((certification, key) => {
				return (
					<div className="certification-body" key={key}>
						<div className="certification-icon">
							<img src={certification.icon} alt="" />
						</div>
						{/* <div className="certification-name">{certification.name}</div>
						<div className="certification-date">{certification.date}</div> */}
					</div>
				);
			})}
		</div>
	);
}

export default Certifications;
