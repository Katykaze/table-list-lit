// src/main.js
import { LitElement, html } from "lit";
import { Router } from "@lit-labs/router";

//---------- import styles
import { mainStyles } from "./styles/main.styles.js";

//---------- import views
import "./modules/views/principalPage/principalPage.js";
import "./modules/views/formPage/formPage.js";

class App extends LitElement {
  constructor() {
    super();
    // --- configuration router
    this.router = new Router(this, [
      {
        path: "/",
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
          <a href="/">Principal Page</a>
        </div>
        <div class="nav-item ${currentRoute === "/form" ? "selected" : ""}">
          <a href="/form">Form Page</a>
        </div>
      </nav>
      ${this.router.outlet()}
    `;
  }
  static get styles() {
    return mainStyles;
  }
}

customElements.define("my-app", App);

// Renderiza la aplicación en el body
document.body.innerHTML = "<my-app></my-app>";
