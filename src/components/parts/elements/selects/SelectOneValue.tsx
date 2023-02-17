import { FC } from 'react'
import { TypeStyleDefault } from '@/types/commons/styles/typeStyles'
import { TypeSelectDefault } from '@/types/components/selects/typeSelects'

interface Props extends TypeSelectDefault, TypeStyleDefault {
  value: string
  changeAction: (value: string) => void
}

const SelectOneValue: FC<Props> = ({
  value,
  changeAction,
  name,
  size,
  disabled,
  emptyLabel = '選択してください',
  options,
}) => {
  const selectProps = { name, size, disabled }
  return (
    <select
      {...selectProps}
      defaultValue={value}
      onChange={(event) => changeAction(event.target.value)}
    >
      {value === '' && <option value=''>{emptyLabel}</option>}
      {options.map((option, index) => {
        return (
          <option
            key={index}
            value={option.value}
            disabled={option.disabled ? option.disabled : false}
          >
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
export default SelectOneValue
