import { TextAreaProps } from "@/types/interfaces"

const TextArea: React.FC<TextAreaProps> = ({name, rows, placeholder, cols, modifier, onChange, value }) => {
  return <textarea 
            value={value}
            name={name}
            rows={rows} 
            cols={cols}
            className={`${modifier}`} 
            placeholder={placeholder}
            onChange={onChange}
        />
}

export default TextArea