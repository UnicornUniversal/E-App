'use client'

import { Modal } from "@/app/components";
import { useAppContext } from "@/app/context/AppContext";
import useUsers from "@/app/hooks/useUsers";
import { BsPersonFillAdd } from 'react-icons/bs'
const UsersPage = () => {

  const { data: users } = useUsers()
  const { addUserModal, handleAddUserModal, setAddUserModal } = useAppContext()
  console.log(users);
 

  return <div className="w-full">
          <div className="flex w-full justify-between items-center">
            <h1>Users</h1>
             <Modal
             icon={BsPersonFillAdd}
             label="Add user"
             modifier="btn"
             modal={addUserModal ? 'modal-2' : ''}
             toggle={addUserModal}
             onClick={() => handleAddUserModal()}
             checked={addUserModal}
             modalOff={() => setAddUserModal(false)}
            >
              <h1>Add users</h1>
            </Modal>
          

          </div>
        </div>;
};

export default UsersPage;

