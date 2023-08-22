'use client'

interface SelectProps {
    name?: string
    value?: any
    children?: JSX.Element[] | JSX.Element
    onChange?: any
    title?: string
    placeholder?: string
    modifier?: string
}

const Select: React.FC<SelectProps> = ({name, value, children, onChange, title, placeholder, modifier}) => {
  return <select  placeholder={placeholder} onChange={onChange} name={name} value={value} className={`select ${modifier}`}>
            <option>{title}</option>
        {children}
        </select>
}

export default Select