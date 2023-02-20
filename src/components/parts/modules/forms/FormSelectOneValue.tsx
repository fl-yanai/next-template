import { FC } from 'react'
import SelectOneValue from '../../elements/selects/SelectOneValue'
import FormWrapDefault from './FormWrapDefault'
import { TypeFormDefault } from '@/components/types/forms/typeForms'
import { TypeSelectDefault } from '@/components/types/selects/typeSelects'
import { TypeStyleDefault } from '@/components/types/styles/typeStyles'

interface Props extends TypeStyleDefault, TypeFormDefault, TypeSelectDefault {
  value: string
  changeAction: (value: string) => void
}

const FormSelectOneValue: FC<Props> = ({
  htmlFor_id,
  value,
  changeAction,
  label,
  error,
  errorMessage,
  name,
  size,
  disabled,
  emptyLabel = '選択してください',
  options,
}) => {
  const wrapProps = { label, error, errorMessage, htmlFor_id }
  const selectProps = { value, changeAction, name, size, disabled, emptyLabel, options }
  return (
    <FormWrapDefault {...wrapProps}>
      <SelectOneValue {...selectProps} />
    </FormWrapDefault>
  )
}
export default FormSelectOneValue
