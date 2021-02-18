import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Table, Media, Container, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export function DetalleDePlaneta() {
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
				{store.planetas.map((planeta, i) => {
					if (i == intId) {
						return (
							<div key={i}>
								<Row>
									<Col>
										<img
											className="align-self-center mr-3"
											width={400}
											height={300}
											src={store.imagenesDePlanetas[i].imagen}
											alt="Generic placeholder"
										/>
									</Col>
									<Col>
										<Media.Body className="text-center">
											<h5>{planeta.name}</h5>
											<p>{store.descripcionesPlanetas[i].description}</p>
										</Media.Body>
									</Col>
								</Row>
								<Table responsive="sm">
									<thead>
										<tr>
											<th>Nombre</th>
											<th>Clima</th>
											<th>Poblacion</th>
											<th>Periodo orbital</th>
											<th>Período de rotación</th>
											<th>Diámetro</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{planeta.name}</td>
											<td>{planeta.climate}</td>
											<td>{planeta.population}</td>
											<td>{planeta.orbital_period}</td>
											<td>{planeta.rotation_period}</td>
											<td>{planeta.diameter}</td>
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
