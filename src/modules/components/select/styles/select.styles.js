import { css } from "lit";

export const selectStyles = css`
  :host {
    display: block;
    width: 100%;
  }
  select {
    --border-color: #008080;
    --background-color: #ffffff;
    --text-color: #333333;

    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background-color: var(--background-color);
    color: var(--text-color);
    box-sizing: border-box;
  }
  p {
    margin: 0 0 0.5rem 0;
    color: var(--text-color);
    font-weight: 500;
  }
`;
