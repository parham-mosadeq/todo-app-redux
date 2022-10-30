import styled from 'styled-components';

// styles App.js
const Main = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  text-align: center;
`;

// styles Todos.js

const FormBtn = styled.button`
  background-color: #831843;

  padding: 0.6rem 1.6rem;
  margin: 1rem auto;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  letter-spacing: 1.4px;
  color: skyblue;

  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
  }

  :focus {
    outline: none;
  }
`;

const MainContainer = styled.div`
  background-color: #9333ea;
  min-height: 100vh;
`;

const Article = styled.div`
  max-width: 500px;
  min-height: 150px;
  padding: 9px 19px;
  margin: auto;
  margin-top: 4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

// styles Todo.sj

const Container = styled.div`
  height: 150px;
  max-height: 500px;
  width: 100%;
`;

const BtnContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  height: min-content;
  padding: 7px 14px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 1rem;
  border-radius: 8px;
`;

export { Container, FormBtn, BtnContainer, Article, MainContainer, Main };
