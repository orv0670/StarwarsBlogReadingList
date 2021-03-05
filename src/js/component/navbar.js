import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Menu = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Navbar className="navbar navbar-dark menu">
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						width="70"
						height="45"
						alt="React Bootstrap logo"
					/>
				</Link>

				<div className="register">
					<Link to="/register">
						<button className="btn btn-success">Registrarse</button>
					</Link>
				</div>
				<div className="login">
					<Link to="/login">
						<button className="btn btn-info">Login</button>
					</Link>
				</div>

				<Navbar.Collapse className="justify-content-end">
					<DropdownButton title={"Favoritos" + " " + store.favoritos.length} id="dropdown-basic-button">
						{store.favoritos.length == 0 ? (
							<Dropdown.Item>Vacio</Dropdown.Item>
						) : (
							store.favoritos.map((favorito, i) => {
								return (
									<Dropdown.Item eventKey={i} key={i} onClick={() => actions.deleteFavoritos(i)}>
										{favorito.type_favorito == "personaje" ? (
											<div>
												<i className="fas fa-user-circle">
													&nbsp;
													{favorito.nombre_favorito}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="fas fa-trash" />
											</div>
										) : (
											<div>
												<i className="fas fa-globe-americas">
													&nbsp;
													{favorito.nombre_favorito}
												</i>
												&nbsp;&nbsp;&nbsp;
												<i className="fas fa-trash" />
											</div>
										)}
									</Dropdown.Item>
								);
							})
						)}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
