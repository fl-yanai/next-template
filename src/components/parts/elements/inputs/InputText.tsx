import { FC } from 'react'
import { TypeInputDefault } from '@/components/types/inputs/typeInputs'
import { TypeStyleDefault } from '@/components/types/styles/typeStyles'

interface Props extends TypeStyleDefault, TypeInputDefault {
  value: string
  changeAction: (value: string) => void
}

const InputText: FC<Props> = ({
  value,
  changeAction,
  type = 'text',
  placeholder = '入力してください',
  padding = 'py-2 px-4',
  width = 'w-[300px]',
  border = true,
  borderColor = 'border-black-400',
  rounded = 'rounded-3xl',
  focus = true,
  focusBorderColor = 'focus:!border-green-400',
  htmlFor_id,
}) => {
  const props = { type, placeholder, value }
  const styles = [padding, width, rounded]
  const borderStyles = [borderColor]
  return (
    <input
      {...props}
      onChange={(e) => changeAction(e.target.value)}
      className={`${styles.join(' ')} ${border ? `border ${borderStyles.join(' ')}` : ``} ${
        focus ? `focus:!outline-0 focus:border ${focusBorderColor}` : ``
      }`}
      id={htmlFor_id ? htmlFor_id : undefined}
    />
  )
}
export default InputText
