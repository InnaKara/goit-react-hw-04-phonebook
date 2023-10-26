import { Card } from 'components/Card/Card';
import { Contacts, Ul } from './ContactList.styled';

export const ContactList = ({ itemsContacts, onDelete }) => {
  return (
    <Ul>
      {itemsContacts.map(item => (
        <Contacts key={item.id}>
          <Card
            onDelete={onDelete}
            name={item.name}
            id={item.id}
            tel={item.number}
          ></Card>
        </Contacts>
      ))}
    </Ul>
  );
};
