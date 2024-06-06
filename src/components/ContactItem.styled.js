import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;
