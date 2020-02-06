import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "./navbar";
import { Jumbo } from "./jumbo";
import { Card } from "./card";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />

			<Jumbo />

			<div className="d-flex justify-content-center">
				<Card
					Url="http://www.marca.com"
					title="Marca"
					button="btn btn-primary"
				/>
				<Card
					Url="http://www.google.com"
					title="Google"
					button="btn btn-success"
				/>
				<Card
					Url="http://www.cope.es"
					title="La Cope"
					button="btn btn-info"
				/>
			</div>
		</div>
	);
}
