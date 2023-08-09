import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { IconType } from 'react-icons';
import { ChangeEventHandler, Dispatch, MouseEventHandler, SetStateAction } from 'react';

interface InputProps {
    toggle?:  boolean | MouseEventHandler<HTMLButtonElement> | Dispatch<SetStateAction<boolean>>
    handleClickShow?: any
    icon: IconType
    type?: string
    disableRipple?: boolean
    label?: string
    name?: string
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> 
    value?: string
}

const Input: React.FC<InputProps> = ({ toggle, handleClickShow, 
                                       icon: Icon, type, disableRipple, 
                                       label, name, onChange, value }) => {

    const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      };
    
  return    <FormControl className='w-full rounded-xl' variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className='rounded-xl'
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    disableRipple={disableRipple}
                    aria-label="toggle password visibility"
                    onClick={handleClickShow}
                    onMouseDown={handleMouseDown}
                    edge="end"
                    
                    >
                    <Icon/>
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
            />
            </FormControl>
};

export default Input;
