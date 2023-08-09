import Button from '@mui/material/Button';
import { IconType } from 'react-icons';

interface ButtonProps {
    icon: IconType
    label?: string
    modifier?: string
    onClick?: () => void
}

const Btn: React.FC<ButtonProps> = ({ icon: Icon, label, modifier, onClick }) => {

  return <Button  onClick={onClick} className={`rounded-lg ${modifier}`} variant="outlined" startIcon={<Icon />}>
            {label}
         </Button>
};

export default Btn;
