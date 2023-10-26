import { styled } from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: ${p => p.theme.spacing(1)};
  width: 450px;
`;
export const Contacts = styled.li`
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  flex-direction: column;
  width: 100%;
`;
