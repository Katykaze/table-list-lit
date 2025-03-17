import { LitElement, html, css } from "lit";
import './button.js';

class NavigationBar extends LitElement {

    render() {
        return html`
        <h1>Componente Navegación</h1>
        <div class="container-navigationBar">
            <wc-button text='Home'></wc-button>
            <wc-button text='Info Page'></wc-button>
            <wc-button text='Form Page'></wc-button>

        </div>
        `
    }
   static get styles() {
        return css`
        .container-navigationBar{
            display:flex;
            justify-content:center;
            margin:auto;
            padding:1pc;
            background-color:#009879;
        }
        `;
    }
}
window.customElements.define('wc-navigation-bar',NavigationBar)