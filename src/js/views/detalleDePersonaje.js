import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function DetalleDePersonaje() {
	const { store, actions } = useContext(Context);
	const { id } = useParams();
	const intId = parseInt(id);
	const history = useHistory();

	const goBack = () => {
		history.goBack();
	};
	return (
		<div>
			<Media className="mt-5">
				{store.personajes.map((personaje, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											className="align-self-center mr-3"
											width={400}
											height={300}
											src={store.imagenesDePersonajes[i].imagen}
											alt="Generic placeholder"
										/>
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{personaje.name}</h5>
											<p>{store.descripcionesPersonajes[i].description}</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Nombre</th>
											<th>Año de nacimiento</th>
											<th>Genero</th>
											<th>Altura</th>
											<th>Color de piel</th>
											<th>Color de ojos</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{personaje.name}</td>
											<td>{personaje.birth_year}</td>
											<td>{personaje.gender}</td>
											<td>{personaje.height}</td>
											<td>{personaje.skin_color}</td>
											<td>{personaje.eye_color}</td>
										</tr>
									</tbody>
								</Table>
								<Button variant="success" onClick={() => goBack()}>
									Ir atras
								</Button>
							</div>
						);
					}
				})}
			</Media>
		</div>
	);
}
