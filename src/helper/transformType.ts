export const transformType = (type: string) => {
  let res = ''
  switch (type) {
    case 'integer':
      res = 'number'
      break

    default:
      res = type
      break
  }

  return res
}
