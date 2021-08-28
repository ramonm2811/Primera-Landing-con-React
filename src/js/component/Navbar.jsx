import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{props.titulo}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse w-100"
					id="navbarNavAltMarkup">
					<div className="navbar-nav w-100 d-flex justify-content-end">
						<a
							className="nav-link active"
							aria-current="page"
							href="#">
							Home
						</a>
						<a className="nav-link" href="#">
							Features
						</a>
						<a className="nav-link" href="#">
							Pricing
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	titulo: PropTypes.string
};
