'use client'

interface SelectProps {
    name?: string
    value?: any
    children?: JSX.Element[] | JSX.Element
    onChange?: any
    title?: string
}

const Select: React.FC<SelectProps> = ({name, value, children, onChange, title}) => {
  return <select onChange={onChange} name={name} value={value} className="select">
            <option>{title}</option>
        {children}
        </select>
}

export default Select