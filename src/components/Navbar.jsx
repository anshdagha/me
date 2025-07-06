import React from "react";
import PropTypes from "prop-types";
import $ from "jquery";

function Navbar(props) {
	function changeNavbarColor() {
		var $nav = $(".navbar");
		var $nav_icon = $(".navbar-toggler-icon");
		var $nav_toggler = $(".navbar-toggler");
		if (!$nav_toggler.hasClass(".collapsed") && $(document).scrollTop() < 1) {
			$nav.toggleClass("scrolled");
			$nav_icon.toggleClass("scrolled");
		}
	}

	function toggleNavbar() {
		setTimeout(() => {
			$(".navbar-collapse").removeClass("show");
			$(this).addClass("active");
		}, 500);
	}

	function scrollToTop() {
		window.scroll({ top: 0, behavior: "smooth" });
	}

	$(window)
		.scroll(function () {
			var distance = $(window).scrollTop();
			$(".page-section").each(function (i) {
				if ($(this).position().top <= distance + 250) {
					$(".navbar-nav a.active").removeClass("active");
					$(".navbar-nav a").eq(i).addClass("active");
				}
			});
		})
		.scroll();

	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href={process.env.PUBLIC_URL}>
					{props.logoFlag ? <img className="logo" src={require("../images/logo.jpg")} alt="" /> : ""}
					{props.title}
				</a>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={changeNavbarColor} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className="nav-link active" href={process.env.PUBLIC_URL + "/#"} onClick={scrollToTop}>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#section-timeline" onClick={toggleNavbar}>
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#section-skills" onClick={toggleNavbar}>
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#section-certifications" onClick={toggleNavbar}>
								Certifications
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#section-projects" onClick={toggleNavbar}>
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#section-education" onClick={toggleNavbar}>
								Education
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#footer" onClick={toggleNavbar}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

Navbar.defaultProps = {
	logoFlag: false,
};

Navbar.propTypes = {
	title: PropTypes.string,
	logoFlag: PropTypes.bool,
};

export default Navbar;
