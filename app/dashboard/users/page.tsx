import UsersPage from "./UsersPage";
import getUsers from "@/actions/getUsers";

const page = async () => {

const users = await getUsers()

console.log(users);

  return <div>
          <UsersPage/>
        </div>
};

export default page;
