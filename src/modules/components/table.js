import { LitElement, html, css } from 'lit';


class Table extends LitElement {
     static properties = {
         columns: { type: Array },
         rows:{type:Array}
    };



    render() {
        return html`
            <table>
                <thead>
                    <tr>
                        ${this.columns.map(column => html`<th>${column}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows.map(row => html`
                        <tr>
                            ${this.columns.map(column => html`<td>${row[column]}</td>`)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }
    static get styles() {
        return css`
        table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }
        thead {
            background-color: #009879;
            color: #ffffff;
            text-align: left;
        }
        th, td {
            padding: 12px 15px;
            width: 25%;
            text-align: left;
            vertical-align: top;
            border-bottom: 1px solid #dddddd;
            border-spacing: 0;
        }
    `};
}

customElements.define('wc-table', Table);