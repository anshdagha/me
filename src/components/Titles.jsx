import React from "react";

function Titles(props) {
	return (
		<div className="titles">
			<h2 className="title">{props.title}</h2>
			<p className="title-desc text-light">{props.titleDesc}</p>
		</div>
	);
}

export default Titles;
