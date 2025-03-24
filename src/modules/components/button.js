import { LitElement, html, css } from "lit";

class Button extends LitElement {
    static properties = {
        text: { type: String },
        disabled: { type: Boolean },
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
            detail: {message:'Button clicked',text:this.text,disabled:this.disabled},
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
            --bg-color: #009879;
            --text-color: #ffffff;
            --disabled-bg-color: #cccccc;
            --disabled-text-color: #666666;

            background-color: var(--bg-color);
            color: var(--text-color);
            border: none;
            border-radius: 10px;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            margin: 4px 2px;
            cursor: pointer;
        }
        button:disabled {
            background-color: var(--disabled-bg-color);
            color: var(--disabled-text-color);
            cursor: not-allowed;
        }
        `;
    }
 }

customElements.define('wc-button', Button);