//---------- import LitElement
import { LitElement, html } from "lit";

//---------- import services
import ApiService from "../../services/apiService.js";

//---------- import utils
import { cloneDeep } from "lodash";
import formatData from "../../../utils/formatData.js";

//---------- import components
import "../../components/table/table.js";
import "../../components/button/button.js";
import "../../components/select/select.js";

//---------- import styles
import { principalPageStyles } from "./styles/principalPage.styles.js";

class PrincipalPage extends LitElement {
  static properties = {
    columns: { type: Array }, //columns rows
    rows: { type: Array }, //reactive rows
    selected: { type: String }, //selected
    optionsSelect: { type: Array }, //options select
    isLoading: { type: Boolean, state: true }, // state true because is internal state
  };

  async connectedCallback() {
    super.connectedCallback(); //call because is a lifecycle method
    await this.fetchData();
  }

  async fetchData() {
    try {
      this.loading = true;
      const data = await ApiService.list();
      const clonedData = cloneDeep(data);

      this.columns = this.obtainColumns(clonedData);
      this.rows = this.obtainRows(clonedData);
      this.optionsSelect = this.getOptionsSelect(clonedData);
    } catch (e) {
      console.error("API - ERROR", e);
    } finally {
      this.loading = false;
    }
  }

  obtainColumns(data) {
    const columnsSet = new Set();
    data.forEach((item) => {
      Object.keys(item.attributes).forEach((key) => {
        columnsSet.add(key);
      });
    });
    return Array.from(columnsSet).map((column) => column);
  }
  obtainRows(data) {
    const dataArray = Array.isArray(data) ? data : [data];
    return dataArray.map((item) => {
      const row = {};
      Object.entries(item.attributes).forEach(([key, value]) => {
        row[key] = formatData(value);
      });
      return row;
    });
  }

  getOptionsSelect(data) {
    return data.map((item) => ({
      value: item.id,
      label: item.attributes.name,
    }));
  }

  async handleButtonClick() {
    try {
      this.loading = true;
      const response = await ApiService.getDog(this.selected);
      this.rows = this.obtainRows(response);
    } catch (e) {
      console.error("FAILED  TO FETCH DOG", e);
      this.rows = [];
    } finally {
      this.loading = false;
    }
  }
  handleChange(event) {
    this.selected = event.detail.value;
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading...</div>`;
    }
    return html`<div class="principal__container">
      <div class="container__form">
        <wc-select
          .options=${this.optionsSelect}
          @select-change=${this.handleChange}
        ></wc-select>
        <wc-button
          text="Select a dog"
          ?disabled=${!this.selected}
          @button-click=${this.handleButtonClick}
        ></wc-button>
      </div>
      <wc-table .columns=${this.columns} .rows=${this.rows}></wc-table>
    </div>`;
  }

  static styles = principalPageStyles;
}

customElements.define("wc-principal-page", PrincipalPage);
