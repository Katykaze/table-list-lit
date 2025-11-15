import { css } from "lit";

export const principalPageStyles = css`
  :host {
    display: block;
    padding: 1rem;
    background-color: #f5f5f5;
    color: #333333;
  }
  .principal__container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .container__form {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: flex-end;
  }

  @media (max-width: 600px) {
    .container__form {
      flex-direction: column;
    }
  }
`;
