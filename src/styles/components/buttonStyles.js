export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ('sm', 'md', 'lg')
  sizes: {},
  // styles for different visual varialnts ('outline'...)
  variants: {
    primary: ({ colorMode }) => ({
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: colorMode === 'dark' ? 'purple.100' : 'purple.900',
        boxShadow: '2xl',
        rounded: ''
      }
    }),
    secondary: ({ colorMode }) => ({
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: colorMode === 'dark' ? 'purple.100' : 'purple.900',
        boxShadow: '2xl',
        rounded: ''
      }
    }),

    secondaryOutline: (props) => ({
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'secondary',
      color: 'secondary',
      _hover: {
        boxShadow: 'md',
        transform: 'scale(1.02)'
      }
    })
  },
  // default values for `size` and `variants`
  defaultProps: {}
}
