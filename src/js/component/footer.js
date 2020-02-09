import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Foter(props) {
	return (
		<footer className="py-5 bg-dark">
			<div className="container">
				<p className="m-0 text-center text-white">
					Copyright © Your Website 2019
				</p>
			</div>
		</footer>
	);
}
