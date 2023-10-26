import { DeleteButton, DivContact, SpanName, SpanTel } from './Card.styled';
import { CiUser } from 'react-icons/ci';

export const Card = ({ name, tel, id, onDelete }) => {
  return (
    <DivContact>
      <CiUser size={22}></CiUser>
      <SpanName>{name} </SpanName> : <SpanTel>{tel}</SpanTel>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </DivContact>
  );
};
