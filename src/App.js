import React from 'react';
import {
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
import { Intro } from './SelfIntro';
import Work from './Research';
import theme from './theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='4xl' alignItems='center' rounded='md' bg="orange.50" centerContent>
      <Intro/>
      </Container>
      <Container maxW='4xl' alignItems='left' rounded='md' bg="orange.50" centerContent>
      <Work/>
      </Container>
    </ChakraProvider>
  );
}

export default App;