import { LitElement, html } from "lit";

class FormPage extends LitElement {
    render() {
        return html`
        <div>
            <h1>Página Formulario</h1>
        </div>
        `
    }
}

window.customElements.define('wc-form-page', FormPage);