import { css } from "lit";

export const tableStyles = css`
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  thead {
    background-color: #008080;
    color: #ffffff;
    text-align: left;
  }
  th,
  td {
    padding: 12px 15px;
    width: 25%;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid #f5f5f5;
    border-spacing: 0;
    color: #333333;
  }
`;
