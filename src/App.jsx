import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Button,
  Center,
  IconButton,
  Stack,
  useColorMode
} from '@chakra-ui/react'
function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center h="100vh" maxW="1200px" mx="auto">
      <Stack isInline>
        <IconButton
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          colorScheme="cyan"
          aria-label="Color mode switcher"
          onClick={toggleColorMode}
        />
        <Button variant="solid" colorScheme="green">
          Solid
        </Button>
        <Button variant="primary">Primary Color</Button>
        <Button variant="secondary">Secondary Color</Button>
        <Button variant="secondaryOutline">Secondary Outline </Button>
      </Stack>
    </Center>
  )
}

export default App
