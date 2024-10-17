export type Option = {
  custom?: boolean
  disabled?: boolean
  selected?: boolean
  label: string
  value: number | string
  [key: string]: number | string | any
}

export type OptionsGroup = {
  label: string
  options?: Option[]
  [key: string]: number | string | any
}

export type SelectedOption = {
  disabled?: boolean
  label: string
  value: number | string
  [key: string]: number | string | any
}
