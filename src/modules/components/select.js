import { html, css, LitElement } from "lit";

class Select extends LitElement {
	static properties = {
		options: { type: Array },
		title: { type: String }
	};

	constructor() {
		super();
	}

	handleChange(event) {
		this.dispatchEvent(
			new CustomEvent("select-change", {
				detail: { value: event.target.value },
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html` ${this.title ? html`<p>${this.title}</p>` : ""}
			<select @change=${this.handleChange}>
				<option value="" label="Select an option"></option>
				${this.options?.map(
			(option) =>
				html`<option value=${option.value}>
							${option.label}
						</option>`
		)}
			</select>`;
	}

	static get styles() {
		return css`
			select {
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
customElements.define("wc-select", Select);
