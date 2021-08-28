import React from "react";
import PropTypes from "prop-types";

let imgStyles = {
	height: "500px"
};

export const Card = props => {
	return (
		<div className="col-12 col-md-3 my-2">
			<div className="card" style={imgStyles}>
				<div className="w-100 overflow-hidden">
					<img
						src={props.imagenURL}
						className="card-img-top"
						alt="..."
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.description}</p>
					<a
						href={props.buttonURL}
						className="btn btn-primary"
						target="_blank">
						{props.button}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	imagenURL: PropTypes.string,
	titulo: PropTypes.string,
	description: PropTypes.string,
	button: PropTypes.string,
	buttonURL: PropTypes.string
};
