import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div className="container">
			<div className="jumbotron">
				<h1 className="display-4">{props.titulo}</h1>
				<p className="lead">{props.description}</p>
				<a
					className="btn btn-primary btn-lg"
					href={props.buttonURL}
					role="button"
					target="_blank">
					{props.button}
				</a>
			</div>
		</div>
	);
};

Jumbotron.propTypes = {
	titulo: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
	buttonURL: PropTypes.string
};
