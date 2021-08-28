import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar titulo="Start Bootstrap" />;
			<Jumbotron
				titulo="A Warm Welcome!"
				button="Call to Action"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
				buttonURL="https://files.slack.com/files-pri/T0BFXMWMV-F028ZUX37NZ/image.png"
			/>
			<Cards />
			<Footer copyright="Copyright &copy; Your Website 2021" />
		</>
	);
};

export default Home;
