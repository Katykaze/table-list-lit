import './principalPage/principalPage.js'
import { LitElement, html } from 'lit';
import '../components/navigationBar.js'

class Home extends LitElement {
    render() {
        // return html`<wc-table-container></wc-table-container>`;
        return html`<wc-navigation-bar></wc-navigation-bar>`;
    }
}
customElements.define('wc-home', Home);