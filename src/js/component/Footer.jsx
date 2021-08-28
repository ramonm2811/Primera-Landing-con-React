import React from "react";
import PropTypes from "prop-types";

let estilos = {
	height: "200px"
};
export const Footer = props => {
	return (
		<div
			style={estilos}
			className="container-fluid d-flex justify-content-center align-items-center text-white bg-dark">
			<h3>{props.copyright}</h3>
		</div>
	);
};

Footer.propTypes = {
	copyright: PropTypes.string
};
