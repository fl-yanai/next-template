import { FC } from 'react'
import SelectOneValue from '../../elements/selects/SelectOneValue'
import FormWrapDefault from './FormWrapDefault'
import { typeFormDefault } from '@/components/types/typeForms'
import { typeSelectDefault } from '@/components/types/typeSelects'
import { typeStyleWrap } from '@/components/types/typeStyles'

interface Props extends typeStyleWrap, typeFormDefault, typeSelectDefault {
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
  required,
  emptyLabel = '選択してください',
  options,
  wrapStyle,
}) => {
  const wrapProps = { label, error, errorMessage, htmlFor_id, disabled, required, wrapStyle }
  const selectProps = { value, changeAction, name, size, disabled, emptyLabel, options }
  return (
    <FormWrapDefault {...wrapProps}>
      <SelectOneValue {...selectProps} />
    </FormWrapDefault>
  )
}
export default FormSelectOneValue
