import { css } from "lit";

export const formPageStyles = css`
  :host {
    display: block;
    padding: 1rem;
    background-color: #f5f5f5;
    color: #333333;
  }
  .form__container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #008080;
    text-align: center;
    margin-bottom: 2rem;
  }
  .form-wrapper {
    max-width: 900px;
    margin: 0 auto 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
  }
  form wc-input,
  form wc-select {
    width: 100%;
  }
  .button-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    .button-container {
      flex-direction: column;
    }
  }
`;
