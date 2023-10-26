import styled from 'styled-components';

export const SpanName = styled.span`
  align-items: center;
  font-weight: bold;
`;
export const SpanTel = styled.span`
  align-items: center;
`;
export const DivContact = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: #007bff;
  }
`;
export const DeleteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;
