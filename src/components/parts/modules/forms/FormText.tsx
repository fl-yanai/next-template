import { FC } from 'react'
import FormWrapDefault from '../../elements/forms/FormWrapDefault'
import InputText from '../../elements/inputs/InputText'
import { TypeFormDefault } from '@/types/components/forms/typeForms'
import { TypeStyleDefault } from '@/types/style/typeStyles'

interface Props extends TypeStyleDefault, TypeFormDefault {
  value: string
  changeAction: (value: string) => void
}

const FormText: FC<Props> = ({ htmlFor_id, value, changeAction, label, error, errorMessage }) => {
  const wrapProps = { label, error, errorMessage, htmlFor_id }
  const inputProps = { value, changeAction, htmlFor_id }
  return (
    <FormWrapDefault {...wrapProps}>
      <InputText {...inputProps} />
    </FormWrapDefault>
  )
}
export default FormText
