import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/work-sans';
import '@fontsource/comic-neue'

const theme = extendTheme({
  fonts: {
    heading: `'Comic Neue', cursive`,
    body: `'Comic Neue', cursive`,
  },
})

// `'Work Sans Variable', sans-serif`,
// "Comic Sans MS, Comic Sans, cursive",
// `'Comic Neue', cursive`,

export default theme