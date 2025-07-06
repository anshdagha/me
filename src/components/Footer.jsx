import React from "react";

function Footer(props) {
	return (
		<footer id="footer" className="footer p-5">
			<div className="titles mb-4">
				<h2 className="title mb-4">{props.title}</h2>
				<p className="title-desc text-light">
					Thanks for stopping by! Let's stay in touch — follow me on social media. <br></br> Have a wonderful day!
				</p>
			</div>

			<div className="footer-icons">
				<a href={"mailto:" + props.socialData.email}>
					<i className="fa-solid fa-envelope"></i>
				</a>
				<a href={props.socialData.linkedin} target="blank_">
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
				<a href={props.socialData.instagram} target="blank_">
					<i className="fa-brands fa-instagram"></i>
				</a>
				<a href={props.socialData.github} target="blank_">
					<i className="fa-brands fa-github"></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
