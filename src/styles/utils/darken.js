import colors from 'simple-color-functions'
export const darken = (color, darkenValue) =>
  colors(color).darken(darkenValue).hex()
