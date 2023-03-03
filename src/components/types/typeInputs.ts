export interface typeInputDefault {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'date'
    | 'file'
    | 'button'
    | 'checkbox'
    | 'radio'
    | 'submit'
    | 'color'
    | 'datetime-local'
    | 'image'
    | 'month'
    | 'range'
    | 'reset'
    | 'search'
    | 'time'
    | 'url'
    | 'week'
    | 'hidden'
  placeholder?: string
  htmlFor_id?: string
  disabled?: boolean
  required?: boolean
}
