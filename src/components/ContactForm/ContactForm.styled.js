import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  align-items: center;

  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  width: 300px;
`;

export const LabelName = styled.label`
  margin: 0;
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  width: 250px;
`;

export const LabelNumber = styled.label`
  margin: 0;
  text-align: left;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  width: 250px;
`;

export const FieldName = styled(Field)`
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: 0;
`;
export const FieldNumber = styled(Field)`
  justify-content: center;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: 0;
`;

export const Btn = styled.button`
  background-color: #007bff;
  color: #fff;
  border: 1px solid #ccc;
  padding: 10px 20px;

  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;
export const ErrorMes = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
