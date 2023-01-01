import { FC } from 'react'
import { FieldWrapper } from '@/components/functional/Form'
import { UseFormRegisterReturn, FieldError } from 'react-hook-form'
import { TextInput } from '@/components/ui/TextInput'
import { ReactNode } from 'react'

type InputFieldProps = {
  type?: 'text' | 'password'
  registration?: UseFormRegisterReturn
  placeholder?: string
  error?: FieldError
  icon?: ReactNode
}

export const InputField: FC<InputFieldProps> = ({
  type = 'text',
  registration,
  error,
  placeholder,
  icon,
}) => {
  return (
    <FieldWrapper error={error}>
      <TextInput type={type} placeholder={placeholder} registration={registration} icon={icon} />
    </FieldWrapper>
  )
}
