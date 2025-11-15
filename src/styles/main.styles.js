import { css } from "lit";

export const mainStyles = css`
  .container-navigationBar {
    display: flex;
    justify-content: center;
    gap: 15rem;
    padding: 1rem;
    background-color: #008080;
  }
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .nav-item a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1rem;
  }

  .nav-item:hover {
    background-color: #ffa000;
    transform: scale(1.05);
  }
  .nav-item.selected {
    background-color: #ffa000;
    transform: scale(1.05);
  }
`;
