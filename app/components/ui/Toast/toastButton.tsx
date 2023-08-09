import { ButtonProps } from "@/types/interfaces";
import { IconButton } from "@mui/material";


const ToastButton:  React.FC<ButtonProps> = ({icon: Icon, clickEvent }) => {
  return <>
            <IconButton
             className="text-xl p-0 m-0 text-white rounded-full grid place-items-center" 
             onClick={clickEvent}
            ><Icon/></IconButton>
        

        </>
};

export default ToastButton;