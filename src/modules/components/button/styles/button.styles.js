import { css } from "lit";

export const buttonStyles = css`
  button {
    --bg-color: #008080;
    --text-color: #ffffff;
    --disabled-bg-color: #f5f5f5;
    --disabled-text-color: #333333;

    background-color: var(--bg-color);
    color: var(--text-color);
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }
  button:disabled {
    background-color: var(--disabled-bg-color);
    color: var(--disabled-text-color);
    cursor: not-allowed;
  }
`;
