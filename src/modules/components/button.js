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
        if (this.disabled) return;
        // Dispatch a custom event when the button is clicked
        this.dispatchEvent(new CustomEvent('button-click', {
            detail: {message:'Button clicked'},
            bubbles: true,
            composed: true
        }));
    }
    handleDisabled() {
        this.disabled = !this.disabled;
        return this.disabled;
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
            button:disabled {
                background-color: #cccccc;
                color: #666666;
                cursor: not-allowed;
            }
        `;
    }
 }

customElements.define('wc-button', Button);