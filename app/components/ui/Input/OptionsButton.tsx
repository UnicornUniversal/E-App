import { Dispatch, SetStateAction, useState } from 'react';
import { IconType } from 'react-icons';
import { Button } from '../..';

type Ops = {
  icon: IconType
  name: string
}
interface OptionsButtonProps {
  options: Ops[]
  selectedOptions: string[]
  setSelectedOptions: Dispatch<SetStateAction<string[]>>
}

const OptionsButton: React.FC<OptionsButtonProps> = ({ options, selectedOptions, setSelectedOptions }) => {

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {options.map((option: Ops) => (
        <Button
          key={option.name}
          modifier={`p-8  ${
            selectedOptions.includes(option.name) ? 'bg-blue-500 text-white' : 'bg-white text-black '
          }`}
          clickEvent={() => handleOptionClick(option.name)}
          text={option.name}
          icon={option.icon}
        />
    
      ))}
    </div>
  );
};

export default OptionsButton;
