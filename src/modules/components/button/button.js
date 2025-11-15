import { LitElement, html } from "lit";
import { buttonStyles } from "./styles/button.styles.js";

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
    this.dispatchEvent(
      new CustomEvent("button-click", {
        detail: {
          message: "Button clicked",
          text: this.text,
          disabled: this.disabled,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`<button ?disabled=${this.disabled} @click=${this.handleClick}>
      ${this.text}
    </button>`;
  }

  static get styles() {
    return buttonStyles;
  }
}

customElements.define("wc-button", Button);
