import './principalPage.js'
import { LitElement, html } from 'lit';

class Home extends LitElement {
    render() {
        return html`<wc-table-container></wc-table-container>`;
    }
}
customElements.define('wc-home', Home);