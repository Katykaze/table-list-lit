import { LitElement, html } from "lit";
import "../../components/input.js";
import "../../components/select.js";
import "../../components/button.js";

// --- Data
const formDataTemplate = {
	name: "",
	description: "",
	numberLife: "",
	numberWeightMale: "",
	numberWeightFemale: "",
	hipoallergenic: "",
};

class FormPage extends LitElement {
	static properties = {
		formData: { type: Object },
	};
	constructor() {
		super();
		this.formData = { ...formDataTemplate };
		this.optionsSelect = [
			{ value: true, label: "Yes" },
			{ value: false, label: "No" },
		];
	}
	handleInput(event) {
		const { name, value } = event.target;
		this.formData = { ...this.formData, [name]: value };
		console.log(this.formData, "this.formData");
	}

	handleSave() {
		console.log(this.formData, "this.formData");
	}
	render() {
		console.log(this.name, "name");
		return html`
			<div>
				<h1>Página Formulario</h1>
				<form>
					<wc-input
						name="name"
						type="text"
						placeholder="Name"
						.value=${this.formData.name}
					></wc-input>
					<wc-input
						name="description"
						type="text"
						placeholder="Description"
						.value=${this.formData.description}
						@input=${this.handleInput}
					></wc-input>
					<wc-input
						name="numberLife"
						type="text"
						placeholder="Life"
						.value=${this.formData.numberLife}
						@input=${this.handleInput}
					></wc-input>
					<wc-input
						name="numberWeightMale"
						type="text"
						placeholder="Male Weight"
						.value=${this.formData.numberWeightMale}
						@input=${this.handleInput}
					></wc-input>
					<wc-input
						name="numberWeightFemale"
						type="text"
						placeholder="Female Weight"
						.value=${this.formData.numberWeightFemale}
						@input=${this.handleInput}
					></wc-input>
					<wc-select
						title="Hipoallergenic?"
						.options=${this.optionsSelect}
						@change=${this.handleInput}
					></wc-select>
				</form>
				<wc-button
					text="Save"
					@button-click=${this.handleSave}
				></wc-button>
			</div>
		`;
	}
}

window.customElements.define("wc-form-page", FormPage);
