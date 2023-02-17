import { FC } from 'react'
import { TypeStyleDefault } from '@/types/commons/styles/typeStyles'
import { TypeFormDefault } from '@/types/components/forms/typeForms'

interface Props extends TypeStyleDefault, TypeFormDefault {
  children: React.ReactNode
}

const FormWrapDefault: FC<Props> = ({
  label,
  error = false,
  errorMessage,
  children,
  blockMargin,
  htmlFor_id,
}) => {
  return (
    <div className={blockMargin ? `${blockMargin}` : undefined}>
      <div className='mb-2'>
        <label htmlFor={htmlFor_id} className='text-black font-medium text-xs md:text-base'>
          {label}
        </label>
      </div>
      {children}
      {error && errorMessage && (
        <p className='mt-1 text-xs md:text-sm text-error-color'>{errorMessage}</p>
      )}
    </div>
  )
}
export default FormWrapDefault
