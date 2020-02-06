import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "./navbar";
import { Card } from "./card";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<div className="d-flex justify-content-start">
				<Card Url="http://www.marca.com" title="Marca" />
				<Card Url="http://www.google.com" title="Google" />
				<Card />
			</div>
		</div>
	);
}
