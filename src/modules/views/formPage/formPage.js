import { LitElement, html } from "lit";
import "../../components/input.js";
import "../../components/select.js";
import "../../components/button.js";
import "../../components/table.js"

class FormPage extends LitElement {
	static properties = {
		formData: { name: { type: String }, description: { type: String }, numberLife: { type: String }, numberWeightMale: { type: String }, numberWeightFemale: { type: String }, hipoallergenic: { type: String } },
		rows:{ type: Array},
	};
	constructor() {
		super();
		this.formData = {name:'', description:'', numberLife:'', numberWeightMale:'', numberWeightFemale:'', hipoallergenic:''};
		this.optionsSelect = [
			{ value: true, label: "Yes" },
			{ value: false, label: "No" },
		];
		this.columns = ['name', 'description', 'numberLife', 'numberWeightMale', 'numberWeightFemale', 'hipoallergenic'];
		this.rows = [];
	}
    handleInput(inputName) {
		return (event) => {
			let value = event.target.value;
			if (inputName == 'hipoallergenic') {
				value === true ? value = 'Yes' : value = 'No';
			}
			this.formData = {...this.formData,[inputName]:value}
        }
	}

	handleSave() {
		if (this.isEmptyObject()) return;
		this.rows = [...this.rows, this.formData];
	}

	cleanFilters() {
		this.formData = { name: '', description: '', numberLife: '', numberWeightMale: '', number: '', WeightFemale: '', hipoallergenic: '' };
	}
	isEmptyObject() {
		return Object.values(this.formData).every((value) => value === '');
	}
	render() {
		return html`
			<div>
				<h1>Página Formulario</h1>
				<form>
					<wc-input
						name="name"
						type="text"
						placeholder="Name"
						.value=${this.formData.name}
                        @input=${this.handleInput('name')}
					></wc-input>
					<wc-input
						name="description"
						type="text"
						placeholder="Description"
						.value=${this.formData.description}
						@input=${this.handleInput('description')}
					></wc-input>
					<wc-input
						name="numberLife"
						type="text"
						placeholder="Life"
						.value=${this.formData.numberLife}
						@input=${this.handleInput('numberLife')}
					></wc-input>
					<wc-input
						name="numberWeightMale"
						type="text"
						placeholder="Male Weight"
						.value=${this.formData.numberWeightMale}
						@input=${this.handleInput('numberWeightMale')}
					></wc-input>
					<wc-input
						name="numberWeightFemale"
						type="text"
						placeholder="Female Weight"
						.value=${this.formData.numberWeightFemale}
						@input=${this.handleInput('numberWeightFemale')}
					></wc-input>
					<wc-select
						title="Hipoallergenic?"
						.options=${this.optionsSelect}
						@change=${this.handleInput('hipoallergenic')}
					></wc-select>
				</form>
				<wc-button
					text="Save"
					?disabled=${this.isEmptyObject()}
					@button-click=${this.handleSave}
				></wc-button>
				<wc-button
					text="Clean"
					@button-click=${this.cleanFilters}
				></wc-button>
			</div>
			<div>
				<wc-table .columns=${this.columns} .rows=${this.rows}></wc-table>
			</div>
		`;
	}
}

window.customElements.define("wc-form-page", FormPage);
