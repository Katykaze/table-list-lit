import { LitElement, html, css } from "lit";

class Input extends LitElement {
	static properties = {
		type: { type: String },
		placeholder: { type: String },
		value: { type: String },
	};
	constructor() {
		super();
	}

	render() {
		return html`<input
			.type=${this.type}
			.placeholder=${this.placeholder}
			.value=${this.value}
			@input=${this.handleInput}
		/>`;
	}

	handleInput(event) {
		const newValue = event.target.value;
		 this.value = newValue; 
			this.dispatchEvent(
				new CustomEvent("input", {
					detail: { value: newValue }, 
					bubbles: true,
					composed: true,
				})
			);
	}

	static get styles() {
		return css`
			input {
				width: 50%;
				padding: 12px 20px;
				margin: 8px 0;
				border: 1px solid #009879;
				border-radius: 4px;
				background-color: #ffffff;
				color: #009879;
			}
		`;
	}
}

customElements.define("wc-input", Input);
