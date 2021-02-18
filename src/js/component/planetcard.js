import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Planetas = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="text-center mt-5 ">Planetas</h1>
			<CardDeck>
				{store.planetas.map((planeta, i) => {
					return (
						<Col className="mt-5" md={4} key={i}>
							<Card>
								<Card.Img variant="top" height="397.66px" src={store.imagenesDePlanetas[i].imagen} />
								<Card.Body>
									<Card.Title>{planeta.name}</Card.Title>
									<Card.Text>
										<p>
											<strong>Poblacion: </strong>
											<span>{planeta.population}</span>
										</p>
										<p>
											<strong>Terreno: </strong>
											<span>{planeta.terrain}</span>
										</p>
									</Card.Text>
									<ButtonToolbar
										className="justify-content-between"
										aria-label="Toolbar with Button groups">
										<Link to={`/planetas/${i}`}>
											<Button variant="info">Aprende mas!!</Button>
										</Link>
										<Link onClick={() => actions.addFavoritos(planeta.name, "planeta")}>
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
