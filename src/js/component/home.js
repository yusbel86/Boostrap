import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Navbar } from "./navbar";
import { Jumbo } from "./jumbo";
import { Card } from "./card";
import { Foter } from "./footer";
//create your first component
export function Home() {
	return (
		<div classNameName="text-center mt-5">
			<Navbar />
			<br />
			<Jumbo />

			<div className="container">
				<div className="row">
					<div className="col">
						<Card
							Url="http://www.marca.com"
							title="Marca"
							button="btn btn-primary"
						/>
					</div>
					<div className="col">
						<Card
							Url="http://www.google.com"
							title="Google"
							button="btn btn-success"
						/>
					</div>
					<div className="col">
						<Card
							Url="http://www.cope.es"
							title="La Cope"
							button="btn btn-info"
						/>
					</div>
					<div className="col">
						<Card
							Url="http://www.cope.es"
							title="La Cope"
							button="btn btn-info"
						/>
					</div>
				</div>
			</div>
			<Foter />
		</div>
	);
}
