import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/buttonStyles'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}
export const theme = extendTheme({
  config,
  colors: {
    primary: '#845EC2',
    secondary: '#D65DB1',
    highlight: '#FF6F91',
    warning: '#F9F871',
    danger: '#C34A36'
  },
  components: {
    Button
  }
})
