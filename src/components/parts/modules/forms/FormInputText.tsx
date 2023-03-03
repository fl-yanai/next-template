import { FC } from 'react'
import InputText from '../../elements/inputs/InputText'
import FormWrapDefault from './FormWrapDefault'
import { typeFormDefault } from '@/components/types/typeForms'
import { typeStyleWrap } from '@/components/types/typeStyles'

interface Props extends typeStyleWrap, typeFormDefault {
  value: string
  changeAction: (value: string) => void
}

const FormInputText: FC<Props> = ({
  htmlFor_id,
  value,
  changeAction,
  label,
  error,
  errorMessage,
  disabled,
  required,
  wrapStyle,
}) => {
  const wrapProps = { label, error, errorMessage, htmlFor_id, disabled, required, wrapStyle }
  const inputProps = { value, changeAction, htmlFor_id, disabled, required }
  return (
    <FormWrapDefault {...wrapProps}>
      <InputText {...inputProps} />
    </FormWrapDefault>
  )
}
export default FormInputText
