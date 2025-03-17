// src/main.js
import { LitElement, html, css } from "lit";
import { Router } from "@lit-labs/router";

//---------- import views
import "./modules/views/home.js";
import "./modules/views/principalPage/principalPage.js";
import "./modules/views/formPage/formPage.js";

class App extends LitElement {
	constructor() {
		super();
		// --- configuration router
		this.router = new Router(this, [
			{ path: "/", render: () => html`<wc-home></wc-home>` },
			{
				path: "/principal",
				render: () => html`<wc-principal-page></wc-principal-page>`,
			},
			{
				path: "/form",
				render: () => html`<wc-form-page></wc-form-page>`,
			},
		]);
	}
	render() {
		const currentRoute = this.router._currentRoute.path;
		return html`
			<nav class="container-navigationBar">
				<div class="nav-item ${currentRoute === "/" ? "selected" : ""}">
					<a href="/">Home</a>
				</div>
				<div
					class="nav-item ${currentRoute === "/principal"
						? "selected"
						: ""}"
				>
					<a href="/principal">Principal Page</a>
				</div>
				<div
					class="nav-item ${currentRoute === "/form"
						? "selected"
						: ""}"
				>
					<a href="/form">Form Page</a>
				</div>
			</nav>
			${this.router.outlet()}
		`;
	}
	static get styles() {
		return css`
			.container-navigationBar {
				display: flex;
				justify-content: center;
				gap: 15rem;
				padding: 1rem;
				background-color: #009879;
			}
			.nav-item {
				display: Flex;
				justify-content: center;
				align-items: center;
				padding: 0.5rem 1rem;
				/* background-color: #8ed2c7; */
				border-radius: 5px;
				transition: background-color 0.3s ease, transform 0.2s ease;
			}
			.nav-item a {
				text-decoration: none;
				color: white;
				font-weight: bold;
				font-size: 1rem;
			}

			.nav-item:hover {
				background-color: #8ed2c7;
				transform: scale(1.05); /* Efecto de agrandamiento */
			}
			.nav-item.selected {
                background-color: #8ed2c7;
                transform: scale(1.05);

		`;
	}
}

customElements.define("my-app", App);

// Renderiza la aplicación en el body
document.body.innerHTML = "<my-app></my-app>";
