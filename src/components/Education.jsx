import React, { Component } from "react";
import "../css/education.css";

class Education extends Component {
	state = {};
	render() {
		return (
			<div className="education">
				<div className="row">
					<div className="col-lg-6 my-auto">
						<img className="education-image" src={require("../images/education.png")} alt="" />
					</div>
					<div className="col-lg-6 item-col">
						<div className="education-item">
							<div className="year-institute">
								<h5 className="year">2023</h5>
								<span className="institute text-light">K. J. Somaiya College of Engineering</span>
							</div>
							<div className="details">
								<h5 className="title text-light">B.Tech. in Computer Engineering</h5>
								<div className="education-details text-light-gray">
									<li>
										CGPA <span className="badge bg-secondary marks-badge">9.63</span>
									</li>
								</div>
							</div>
						</div>
						<div className="education-item">
							<h5 className="year">2019</h5>
							<span className="institute text-light">Saket College of Arts, Science and Commerce</span>
							<div className="details">
								<h4 className="title text-light">HSC</h4>
								<div className="education-details text-light-gray">
									<li>
										Got <span className="badge bg-secondary marks-badge">85.23%</span> in 12th Boards
									</li>
									<li>
										Scored <span className="badge bg-secondary marks-badge">97%ile</span> in MHT-CET
									</li>
									<li>
										And <span className="badge bg-secondary marks-badge">92%ile</span> in JEE Mains
									</li>
								</div>
							</div>
						</div>
						<div className="education-item">
							<h5 className="year">2017</h5>
							<span className="institute text-light">Vidya Niketan School</span>
							<div className="details">
								<h4 className="title text-light">SSC</h4>
								<div className="education-details text-light-gray">
									<li>
										Scored <span className="badge bg-secondary marks-badge">94.20%</span> in 10th Board exams
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;
