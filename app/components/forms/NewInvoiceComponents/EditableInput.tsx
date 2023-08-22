import React, { FC } from 'react'
import { Text } from '@react-pdf/renderer'
import compose from './styles/compose'
import { Input } from '../..'
import { IconBaseProps } from 'react-icons'

interface Props {
  className?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  pdfMode?: boolean
  disabled?: boolean
}

const EditableInput: FC<Props> = ({ className, placeholder, value, onChange, pdfMode, disabled }) => {
  return (
    <>
      {pdfMode ? (
        <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
      ) : (
        <Input
            disabled={disabled}
            type="text"
            modifier={'' + (className ? className : '')}
            placeholder={placeholder || ''}
            value={value || ''}
            onChange={onChange ? (e: { target: { value: string } }) => onChange(e.target.value) : undefined} 
            icon={function (props: IconBaseProps): JSX.Element {
              throw new Error('Function not implemented.')
            } }/>
      )}
    </>
  )
}

export default EditableInput