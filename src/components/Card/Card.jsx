import { DeleteButton, DivContact, SpanName, SpanTel } from './Card.styled';

export const Card = ({ name, tel, id, onDelete }) => {
  return (
    <DivContact>
      <SpanName>{name} </SpanName> : <SpanTel>{tel}</SpanTel>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </DivContact>
  );
};
