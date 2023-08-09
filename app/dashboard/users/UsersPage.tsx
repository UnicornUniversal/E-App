'use client'

import { Modal } from "@/app/components";
import useUsers from "@/app/hooks/useUsers";
import React from "react";

const UsersPage = () => {

  const { data: users } = useUsers()

  console.log(users);
 

  return <div className="w-full">
          <div className="flex w-full justify-between items-center">
            <h1>Users</h1>
             <Modal>
              <h1>Add Users</h1>
             </Modal>
          </div>
        </div>;
};

export default UsersPage;

