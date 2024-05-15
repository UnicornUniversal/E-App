import { Dispatch, SetStateAction, useState } from 'react';
import { IconType } from 'react-icons';
import { Button } from '../..';

type Ops = {
  icon: IconType
  name: string
}
interface SelectContactProps {
  contacts: Ops[]
  selectedContacts: string[]
  setSelectedContacts: Dispatch<SetStateAction<string[]>>
}

const SelectContact: React.FC<SelectContactProps> = ({ contacts, selectedContacts, setSelectedContacts }) => {

  const handleContactSelect = (option: string) => {
    if (selectedContacts.includes(option)) {
      setSelectedContacts(selectedContacts.filter((item) => item !== option));
    } else {
      setSelectedContacts([...selectedContacts, option]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contacts.map((contact: Ops) => (
        <Button
          key={contact.name}
          modifier={`p-8  ${
            selectedContacts.includes(contact.name) ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          clickEvent={() => handleContactSelect(contact.name)}
          text={contact.name}
          icon={contact.icon}
        />
    
      ))}
    </div>
  );
};

export default SelectContact;