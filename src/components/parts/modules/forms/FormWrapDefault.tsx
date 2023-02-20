import { FC } from 'react'
import { TypeFormDefault } from '@/components/types/forms/typeForms'
import { TypeStyleDefault } from '@/components/types/styles/typeStyles'

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
