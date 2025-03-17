// src/main.js
import { LitElement, html } from 'lit';
import { Router } from '@lit-labs/router';

//---------- import views
import './modules/views/home.js';
import './modules/views/principalPage/principalPage.js'
import './modules/views/formPage/formPage.js'

class App extends LitElement {
    constructor() {
        super();

        // --- configuration router
        this.router = new Router(this, [
            { path: '/', render: () => html`<wc-home></wc-home>` },
            { path: '/principal', render: () => html`<wc-principal-page></wc-principal-page>` },
            { path: '/form', render: () => html`<wc-form-page></wc-form-page>` },
        ])
    }
    render() {
        // return html`
        //     <wc-home></wc-home>
        // `;
        return html`
            <nav>
                <a href="/">Home</a> <!-- Enlace a la página de inicio -->
                <a href="/principal">Principal Page</a> <!-- Enlace a la página "About" -->
                <a href="/form">Form Page</a> <!-- Enlace a la página "Contact" -->
            </nav>
            ${this.router.outlet()} <!-- Aquí se renderiza el contenido de la ruta actual -->
        `;
    }
}

customElements.define('my-app', App);

// Renderiza la aplicación en el body
document.body.innerHTML = '<my-app></my-app>';