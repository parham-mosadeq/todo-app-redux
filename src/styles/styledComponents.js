import styled from 'styled-components';

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

export { Container, BtnContainer };
