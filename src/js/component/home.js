import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<Link to="/personajes">
						<img
							className="d-block w-100"
							src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
							alt="Personajes"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Personajes</h3>
						<p>Encuentra tus personajes favoritos de Star Wars</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Link to="/planetas">
						<img
							className="d-block w-100"
							src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg"
							alt="Planetas"
						/>
					</Link>
					<Carousel.Caption>
						<h3>Planetas</h3>
						<p>Encuentra tus planetas favoritos de Star Wars</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};
