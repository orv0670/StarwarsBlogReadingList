import React from "react";

export function Footer() {
	return (
		<ul className="nav justify-content-center  footer mt-3 p-2">
			<li className="nav-item">
				<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
					<b>Desarrolador: Oscar Ramírez Villalta</b>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="mailto:orv0670@gmail.com">
					<i className="fas fa-envelope" /> Email
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="https://github.com/orv0670" tabIndex="-1" aria-disabled="false">
					<i className="fab fa-github" /> GitHub
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link"
					href="https://www.linkedin.com/in/%C3%B3scar-ram%C3%ADrez-villalta-238b55173/"
					tabIndex="-1"
					aria-disabled="false">
					<i className="fab fa-linkedin" /> LinkedIn
				</a>
			</li>
		</ul>
	);
}
