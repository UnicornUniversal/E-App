'use client'

import useDarkMode from "@/app/hooks/useDarkMode"

const Checker = () => {

const [ toggle, setDark ] = useDarkMode()

const handleDarkMode = () => {
  setDark((prev: boolean ) => !prev)
}

  return <input checked={toggle} onClick={handleDarkMode} type="checkbox" className="switch" />
}

export default Checker