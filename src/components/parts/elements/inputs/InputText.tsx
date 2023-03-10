import { FC } from 'react'
import { typeInputDefault } from '@/components/types/typeInputs'
import { typeStyleDefault } from '@/components/types/typeStyles'

interface Props extends typeStyleDefault, typeInputDefault {
  value: string
  changeAction: (value: string) => void
}

const InputText: FC<Props> = ({
  value,
  changeAction,
  type = 'text',
  htmlFor_id,
  disabled = false,
  required = false,
  placeholder = '入力してください',
  padding = 'py-2 px-4',
  width = 'w-[300px]',
  border = true,
  borderColor = 'border-black-400',
  borderRadius = 'rounded-3xl',
  focus = true,
  focusBorderColor = 'focus:!border-green-400',
}) => {
  const props = { type, placeholder, value, disabled, required }
  const styles = [padding, width, borderRadius]
  const borderStyles = [borderColor]
  return (
    <input
      {...props}
      onChange={(e) => changeAction(e.target.value)}
      className={`${styles.join(' ')} ${border ? `border ${borderStyles.join(' ')}` : ``} ${
        focus ? `focus:border focus:!outline-0 ${focusBorderColor}` : ``
      }`}
      id={htmlFor_id ? htmlFor_id : undefined}
    />
  )
}
export default InputText
