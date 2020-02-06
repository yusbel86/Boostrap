import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Card(props) {
	return (
		<div className="card text-center" style={{ width: "280px" }}>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					With supporting text below as a natural lead-in to
					additional content.
				</p>
				<a href={props.Url} className={props.bootons}>
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	Url: PropTypes.string,
	title: PropTypes.string,
	bootons: PropTypes
};
