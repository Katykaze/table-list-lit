import { LitElement, html } from "lit";
import { tableStyles } from "./styles/table.styles.js";

class Table extends LitElement {
  static properties = {
    columns: { type: Array },
    rows: { type: Array },
  };

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns?.map((column) => html`<th>${column}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.rows?.map(
            (row) => html`
              <tr>
                ${this.columns?.map(
                  (column) => html`<td>${row[column] ?? "-"}</td>`
                )}
              </tr>
            `
          )}
        </tbody>
      </table>
    `;
  }

  static get styles() {
    return tableStyles;
  }
}

customElements.define("wc-table", Table);
