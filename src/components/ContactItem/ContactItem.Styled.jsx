import styled from 'styled-components';

export const ListWrapper = styled.ul`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  padding: 12px 12px 12px 30px;
  font-size: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
`;

export const ListBtn = styled.button`
  display: flex;
  align-items: center;
  margin-left: 8px;
  padding: 0px 10px;
  width: fit-content;
  max-height: 23px;
  background-color: #f3f9fd;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  font-size: 14px;
  cursor: pointer;
  &:active,
  &:hover {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.6);
  }
  &:active {
    background-color: antiquewhite;
  }
`;
