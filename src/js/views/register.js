import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			alert("el usuario o la contraseña son requeridos!, por favor intente de nuevo");
		}
		console.log(email, password);

		// FETCH
		const data = { email: email, password: password };

		fetch("https://3000-violet-gopher-518mllp5.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Exito:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center">
			<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="floatingInput">Dirrecion de email</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Contraseña"
						onChange={e => setPassword(e.target.value)}
					/>
					<label htmlFor="floatingPassword">Contraseña</label>
				</div>
				<input type="submit" className="btn btn-primary" value="Registrarse" />
			</form>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
