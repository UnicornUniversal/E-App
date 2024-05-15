import { useContacts } from '@/app/hooks'
import React from 'react'
import SelectContact from './SelectContacts'

const Contacts = () => {

const { selectedContacts, setSelectedContacts } = useContacts()

  return <>
            <div>
            <SelectContact 
            contacts={[]} 
            selectedContacts={selectedContacts} 
            setSelectedContacts={setSelectedContacts}/>
            </div>
        </>
}

export default Contacts