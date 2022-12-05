import colors from 'simple-color-functions'
export const whiten = (color, lightenValue) =>
  colors(color).brighten(lightenValue).hex()
