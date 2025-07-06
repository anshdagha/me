import React from "react";
import Titles from "./Titles";
import Job from "./Job";
import "../css/timeline.css";

function Timeline(props) {
	return (
		<div className="row">
			<div className="col-lg-4">
				<Titles title="Work Experience" titleDesc={props.timelineData.description} />
				<img className="route" src={require("../images/route.png")} alt="" />
			</div>
			<div className="col-lg-8">
				<div className="main-timeline">
					{props.timelineData.experience.map((data, key) => {
						return <Job key={key} jobtitle={data.jobtitle} company={data.company} timespan={data.timespan} jobDesc={data.jobDesc} logo={data.logo} />;
					})}
				</div>
				<img className="route" id="route-end" src={require("../images/route.png")} alt="" />
			</div>
		</div>
	);
}

export default Timeline;
