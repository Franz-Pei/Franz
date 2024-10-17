const isObjectInArray = <T>(array: T[], item: T, ignore: string[] = []) =>
  array.some((_item: T) => {
    let result = true
    for (const key in _item) {
      if (!ignore.includes(key) && item[key] !== _item[key]) {
        result = false
        break
      }
    }

    return result
  })

export default isObjectInArray
