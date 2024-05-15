"use client"

import React, { useState } from 'react'

const useContacts = () => {

    const [ selectedContacts, setSelectedContacts ] = useState<string[]>([])

  return { selectedContacts, setSelectedContacts }
}

export default useContacts