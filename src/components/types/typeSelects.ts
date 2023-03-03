export interface typeSelectOptions {
  value: string
  label: string
  disabled?: boolean
}

export interface typeSelectDefault {
  name: string
  options: typeSelectOptions[]
  size?: number
  disabled?: boolean
  emptyLabel?: string
}
