import { LitElement, html } from "lit";
import { inputStyles } from "./styles/input.styles.js";

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
    return inputStyles;
  }
}

customElements.define("wc-input", Input);
