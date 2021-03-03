import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "./store/appContext";
import injectContext from "./store/appContext";
//componentes
import { Menu } from "./component/navbar";
import { Personajes } from "./component/personcard";
import { Planetas } from "./component/planetcard";
import { Home } from "./component/home";
import { Footer } from "./component/footer";
//views
import { DetalleDePersonaje } from "./views/detalleDePersonaje";
import { DetalleDePlaneta } from "./views/detalleDePlaneta";
import { Register } from "./views/register";
import { Login } from "./views/login";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<Menu />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/personajes">
						<Personajes />
						<Footer />
					</Route>
					<Route exact path="/planetas">
						<Planetas />
						<Footer />
					</Route>
					<Route exact path="/personaje/:id">
						<DetalleDePersonaje />
					</Route>
					<Route exact path="/planetas/:id">
						<DetalleDePlaneta />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
