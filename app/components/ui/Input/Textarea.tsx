import { TextAreaProps } from "@/types/interfaces"


const TextArea: React.FC<TextAreaProps> = ({ rows, placeholder, cols, modifier }) => {
  return <textarea 
            rows={rows} 
            cols={cols}
            className={`${modifier}`} 
            placeholder={placeholder}

        />
}

export default TextArea