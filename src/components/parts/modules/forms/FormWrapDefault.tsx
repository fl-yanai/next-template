import { FC } from 'react'
import { typeFormDefault } from '@/components/types/typeForms'
import { typeStyleWrap } from '@/components/types/typeStyles'

interface Props extends typeStyleWrap, typeFormDefault {
  children: React.ReactNode
}

const FormWrapDefault: FC<Props> = ({
  label,
  error = false,
  errorMessage,
  children,
  wrapStyle,
  htmlFor_id,
  disabled = false,
  required = false,
}) => {
  return (
    <div className={`${wrapStyle ? `${wrapStyle.margin}` : ''}`}>
      <div className='mb-2'>
        <label htmlFor={htmlFor_id} className='text-xs font-medium text-black md:text-base'>
          {label}
          {required ? <sup className='mx-1 text-[10px]'>※</sup> : <></>}
        </label>
      </div>
      {children}
      {error && errorMessage && (
        <p className='mt-1 text-xs text-error-color md:text-sm'>{errorMessage}</p>
      )}
    </div>
  )
}
export default FormWrapDefault
