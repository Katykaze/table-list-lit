import { LitElement, html, css } from "lit";

class Button extends LitElement {
    static properties = {
        text: { type: String },
        disabled: { type: Boolean },
        onClick: { type: Function }
    };

 
    constructor() {
        super();
        this.text = "Click me";
        this.disabled = false;
    }
    handleClick() {
        this.dispatchEvent(new CustomEvent('button-click', {
            detail: {message:'Button clicked'},
            bubbles: true,
            composed: true
        }));
    }
    render() {
        return html`<button ?disabled=${this.disabled} @click=${this.handleClick}>${this.text}</button>`;
    }
       static get styles() {
        return css`
            button {
                background-color: #009879;
                color: #ffffff;
                border:none;
                border-radius: 10px;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                margin: 4px 2px;
                cursor: pointer;
            }
        `;
    }
 }

customElements.define('wc-button', Button);