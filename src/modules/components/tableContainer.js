import  './table.js';
import { LitElement, html, css } from 'lit';
import ApiService from '../services/apiService.js';
import { cloneDeep } from "lodash";
import formatData from '../../utils/formatData.js';



class ContainerTable extends LitElement {
     static properties = {
         columns: { type: Array },//columns rows
         rows:{type:Array}//reactive rows
    };
    static styles = css`:host{
        display:flex;
        justify-content:center;
        align-items:center;
        width:60%;
        margin-top: 50px;
        
    }`;
       
    constructor() {
        super();
        this.columns = [];
        this.rows =[]

    }

 
    async connectedCallback() {
        super.connectedCallback(); //llamar siempre para sobreescribir al metodo LitElement
        try {
            const data = await ApiService.list();
            const clonedData = cloneDeep(data);
            this.obtainColumns(clonedData)
            this.obtainRows(clonedData);
        } catch (e) {
            console.log(e)
        }
    }
    
    render() {
        return html`<wc-table .columns=${this.columns} .rows=${this.rows} ></wc-table>`;
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
        data.map(item => {
            const row = {};
            Object.entries(item.attributes).forEach(([key, value]) => {
                row[key] = formatData(value);
            });
            this.rows.push(row);
        })
    }

}

customElements.define('wc-table-container', ContainerTable);