import type { Option, OptionsGroup, SelectedOption } from './types'

export const createOption = (label: string, options: (Option | OptionsGroup)[]) => {
  const value = label.toLowerCase().replace(/\s/g, '-')
  let uniqueValue = value
  let i = 1

  while (options.some((option) => String(option.value) === uniqueValue)) {
    uniqueValue = `${value}-${i}`
    i++
  }

  return [
    {
      value: uniqueValue,
      label,
      custom: true,
    },
  ]
}

export const filterOptionsList = (search: string, _options: (Option | OptionsGroup)[]) => {
  if (search.length > 0 && _options) {
    const optionsList = []

    for (const option of _options) {
      const options =
        option.options &&
        option.options.filter(
          (option: Option) =>
            option.label && option.label.toLowerCase().includes(search.toLowerCase()),
        )
      if (
        (option.label && option.label.toLowerCase().includes(search.toLowerCase())) ||
        (options && options.length > 0)
      ) {
        optionsList.push(Object.assign({}, option, options && options.length > 0 && { options }))
      }
    }

    return optionsList
  }

  return _options
}

export const flattenOptionsArray = (
  options: (Option | OptionsGroup)[],
  keepGroupLabel?: boolean,
): (Option | OptionsGroup)[] => {
  const optionsList: (Option | OptionsGroup)[] = []

  for (const option of options) {
    if (Array.isArray(option.options)) {
      const { options, ...rest } = option
      if (keepGroupLabel) {
        optionsList.push(rest)
      }

      optionsList.push(...options)
    } else {
      optionsList.push(option)
    }
  }

  return optionsList
}

export const getNextSibling = (elem: HTMLElement, selector?: string) => {
  // Get the next sibling element
  let sibling = elem.nextElementSibling

  // If there's no selector, return the first sibling
  if (!selector) return sibling

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.nextElementSibling
  }

  return
}

export const getPreviousSibling = (elem: HTMLElement, selector?: string) => {
  // Get the next sibling element
  let sibling = elem.previousElementSibling

  // If there's no selector, return the first sibling
  if (!selector) return sibling

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling
    sibling = sibling.previousElementSibling
  }

  return
}

export const selectOptions = (
  options: (Option | OptionsGroup)[],
  selected: SelectedOption[],
  deselected?: Option[],
) => {
  let _selected = [...selected, ...options]

  if (deselected) {
    _selected = _selected.filter(
      (selectedOption) =>
        !deselected.some((deselectedOption) => deselectedOption.value === selectedOption.value),
    )
  }

  const deduplicated: SelectedOption[] = []

  for (const option of _selected) {
    if (!deduplicated.some((obj) => obj.value === option.value)) {
      deduplicated.push(option as SelectedOption)
    }
  }

  return deduplicated
}
