export interface TypeSelectOptions {
  value: string
  label: string
  disabled?: boolean
}

export interface TypeSelectDefault {
  name: string
  options: TypeSelectOptions[]
  size?: number
  disabled?: boolean
  emptyLabel?: string
}

export interface TypeSelectMultiValue extends TypeSelectDefault {}
