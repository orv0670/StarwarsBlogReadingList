import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Personajes = props => {
	const { store, actions } = useContext(Context);

	console.log(store.personajes);

	return (
		<div>
			<h1 className="text-center mt-5 ">Personajes</h1>
			<CardDeck>
				{store.personajes.map((personaje, i) => {
					return (
						<Col className="mt-5" md={4} key={i}>
							<Card>
								<Card.Img variant="top" height="298.23px" src={store.imagenesDePersonajes[i].imagen} />
								<Card.Body>
									<Card.Title>{personaje.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Genero: </strong>
											<span>{personaje.gender}</span>
										</p>
										<p>
											<strong>Color de cabello: </strong>
											<span>{personaje.hair_color}</span>
										</p>
										<p>
											<strong>Color de ojos: </strong>
											<span>{personaje.eye_color}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/personaje/${i}`}>
											<Button variant="info">Aprende mas!!</Button>
										</Link>
										<Link onClick={() => actions.addFavoritos(personaje.name, "personaje")}>
											<Button variant="outline-danger">
												<i className="far fa-heart" />
											</Button>
										</Link>
									</ButtonToolbar>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</CardDeck>
		</div>
	);
};
