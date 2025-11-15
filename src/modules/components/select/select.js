import { html, LitElement } from "lit";
import { selectStyles } from "./styles/select.styles.js";

class Select extends LitElement {
  static properties = {
    options: { type: Array },
    title: { type: String },
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
            html`<option value=${option.value}>${option.label}</option>`
        )}
      </select>`;
  }

  static get styles() {
    return selectStyles;
  }
}
customElements.define("wc-select", Select);
