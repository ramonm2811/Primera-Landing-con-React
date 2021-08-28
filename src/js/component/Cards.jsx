import React from "react";
import { Card } from "./Card.jsx";

export const Cards = () => {
	return (
		<div className="container">
			<div className="row my-5">
				<Card
					imagenURL="https://i.pinimg.com/236x/a5/28/7c/a5287c6391e34242ff64a8ef6e37c42d.jpg"
					titulo="Joey"
					description="dsfv fjeraf erg rtg trf r vgsergvrtg rfew fgvre"
					button="Click me"
					buttonURL="https://files.slack.com/files-pri/T0BFXMWMV-F028ZUX37NZ/image.png"
				/>
				<Card
					imagenURL="https://i.pinimg.com/236x/51/f9/c4/51f9c427def47a33638f56f415c3b281.jpg"
					titulo="Rachel"
					description="dsfv fjeraf erg rtg trf r vgsergvrtg rfew fgvre"
					button="Click me"
					buttonURL="https://files.slack.com/files-pri/T0BFXMWMV-F028ZUX37NZ/image.png"
				/>
				<Card
					imagenURL="https://i.pinimg.com/236x/d8/74/19/d874197b4655ef6c474afaec7c52bda4.jpg"
					titulo="Monica"
					description="dsfv fjeraf erg rtg trf r vgsergvrtg rfew fgvre"
					button="Click me"
					buttonURL="https://files.slack.com/files-pri/T0BFXMWMV-F028ZUX37NZ/image.png"
				/>
				<Card
					imagenURL="https://i.pinimg.com/236x/91/f8/fd/91f8fd2a24d641fbd7badebf96ff8e7d.jpg"
					titulo="Phoebe"
					description="dsfv fjeraf erg rtg trf r vgsergvrtg rfew fgvre"
					button="Click me"
					buttonURL="https://files.slack.com/files-pri/T0BFXMWMV-F028ZUX37NZ/image.png"
				/>
			</div>
		</div>
	);
};
