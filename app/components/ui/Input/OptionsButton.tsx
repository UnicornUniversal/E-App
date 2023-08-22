import { Dispatch, SetStateAction, useState } from 'react';

interface OptionsButtonProps {
  options: string[];
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
    <div className="flex space-x-2">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 border btn ${
            selectedOptions.includes(option) ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionsButton;
