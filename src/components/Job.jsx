import React from "react";
import PropTypes from "prop-types";

function Job(props) {
	return (
		<div className="job mb-4">
			<div className="job-content">
				<div className="job-logo">
					<img src={props.logo} alt={props.company + " logo"} />
				</div>
				<h3 className="title mb-0">{props.jobtitle}</h3>
				<p className="company text-light">{props.company}</p>
				<span className="badge bg-secondary time-badge">{props.timespan}</span>
				<p className="description mt-2 text-light-gray">{props.jobDesc}</p>
			</div>
		</div>
	);
}

export default Job;

Job.propTypes = {
	jobtitle: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	timespan: PropTypes.string.isRequired,
	jobDesc: PropTypes.string,
	logo: PropTypes.any,
};
