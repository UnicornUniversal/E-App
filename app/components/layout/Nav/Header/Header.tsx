import { Checker, Button, Avatar, ThemeSwitcher } from "@/app/components";
import { User } from "@prisma/client";
import { FaSearch, FaEnvelope } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";


interface HeaderProps {
  user?: User
  path?: string   
}
const Header: React.FC<HeaderProps> = ({ user, path = 'Dashboard' }) => {
  return <div className="w-full space-y-4">
    <div>
    <h1>Welcome, {user?.name}</h1>
    </div>
    <div className="w-full">
    <div className="flex items-center justify-between">
    <h1 className="text-2xl font-bold">{path}</h1>
    <div className="flex items-center gap-4">
      <ThemeSwitcher/>
    <Button
     icon={FaSearch}
     text=""
    />
    <Button
    icon={BiSolidBell}
    text=""
    />
    <Button
    icon={FaEnvelope}
    text=""
    />
    <div className="divider divider-vertical h-[50px]"></div>
    <Avatar
    width="h-14 w-14"
    />
    </div>
    </div>
    </div>
          
    </div>
};

export default Header;
