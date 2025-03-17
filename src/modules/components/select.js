import { html, css, LitElement } from 'lit';

class Select extends LitElement {
    static properties = {
        options: { type: Array }
    };

    constructor() {
        super();
        this.options = [];
    }

    handleChange(event) {       
        this.dispatchEvent(new CustomEvent('change', {
            detail: { value: event.target.value },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`<select @change=${this.handleChange}>
            <option value="" label="Select an option"></option>
            ${this.options.map(option => html`<option value=${option.value}>${option.label}</option>`)}
        </select>`
        ;
    }

    static get styles() {
        return css`
        select{
            width:50%;
            padding: 12px 20px;
            margin: 8px 0;
            border: 1px solid #009879;
            border-radius: 4px;
            background-color: #ffffff;
            color: #009879;
            }`;
    }
}
customElements.define('wc-select', Select);