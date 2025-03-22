
//---------- import LitElement
import { LitElement, html, css } from 'lit';

//---------- import services
import ApiService from '../../services/apiService.js';

//---------- import utils
import { cloneDeep } from "lodash";
import formatData from '../../../utils/formatData.js';

//---------- import components
import '../../components/table.js';
import '../../components/button.js';
import '../../components/select.js';



class PrincipalPage extends LitElement {
     static properties = {
         columns: { type: Array },//columns rows
         rows: { type: Array },//reactive rows
         selected: { type: String },//selected
         
    };

    constructor() {
        super();
        this.columns = [];
        this.rows = []
        this.selected = '';
        this.optionsSelect = [];

    }

 
    async connectedCallback() {
        super.connectedCallback(); //llamar siempre para sobreescribir al metodo LitElement
        try {
            const data = await ApiService.list();
            const clonedData = cloneDeep(data);
            
            this.obtainColumns(clonedData)
            this.obtainRows(clonedData);
            this.optionsSelect = this.getOptionsSelect(clonedData);
            
        } catch (e) {
            console.log(e)
        }
    }

    async handleButtonClick() {      
        try {
            const response = await ApiService.getDog(this.selected);
            this.obtainRows(response);
        } catch (e) { console.log(e); }
    }
    handleChange(event) {
        this.selected = event.detail.value;
    }
    
    obtainColumns(data) {
       
        const columnsSet = new Set();
        for(const key in data) {
            for(const key2 in data[key].attributes) {
                columnsSet.add(key2);
                
            }
        }
        this.columns = Array.from(columnsSet).map(column => (column));
    }
    obtainRows(data) {       
        const dataArray = Array.isArray(data) ? data : [data];
        this.rows = dataArray.map(item => {
            const row = {};
            Object.entries(item.attributes).forEach(([key, value]) => {
                row[key] = formatData(value);
            });
            return row;
        });
    }

   getOptionsSelect(data) {
    this.optionsSelect = data.map(item => ({
        value: item.id,
        label: item.attributes.name
    }));
    return this.optionsSelect;
    }
        render() {
        return html`<div class="container__form">
            <wc-select .options=${this.optionsSelect} @change=${this.handleChange}></wc-select>
            <wc-button text="Select a dog" ?disabled=${this.selected === ''} @button-click=${this.handleButtonClick}></wc-button>
            </div>
            <wc-table .columns=${this.columns} .rows=${this.rows} ></wc-table>`
    }

    static styles = css`
    .container__form {
        display:flex;
        flex-direction:column;
        width:100%;
        gap:16px;
        
    }`;
       
}

customElements.define('wc-principal-page', PrincipalPage);