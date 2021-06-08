import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  
  margin: 0 auto;

  padding: 2rem 1rem 12rem; // cima, vertical, embaixo

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;

    background: var(--blue-light);

    padding: 0  2rem;

    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    color: #fff;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
