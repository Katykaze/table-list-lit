import { LitElement, html, css } from "lit";

class Input extends LitElement {
	static properties = {
		type: { type: String },
		placeholder: { type: String },
		value: { type: String, state: true },
	};
	constructor() {
		super();
		this.type = "text";
		this.placeholder = "";
		this.value = "";
	}

	render() {
		return html`<input
			.type=${this.type}
			placeholder=${this.placeholder}
			.value=${this.value}
			@input=${this.handleInput}
		/>`;
	}

	handleInput(event) {
		const newValue = event.target.value;
		 this.value = newValue; 
			this.dispatchEvent(
				new CustomEvent("input-change", {
					detail: { value: newValue }, 
					bubbles: true,
					composed: true,
				})
			);
	}

	static get styles() {
		return css`
			input {
            --border-color: #009879;
            --background-color: #ffffff;
            --text-color: #009879;

            width: 50%;
            padding: 12px 20px;
            margin: 8px 0;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background-color: var(--background-color);
            color: var(--text-color);
        }
		`;
	}
}

customElements.define("wc-input", Input);
