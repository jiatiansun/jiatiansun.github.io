import React from 'react';
import {
  Center,
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
import { Intro } from './SelfIntro';
import Work from './Research';
import theme from './theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
      <Container maxW='4xl' maxH="1fr" alignItems='center' rounded='md' bg="orange.50" centerContent>
      <Intro/>
      </Container>
      </Center>
      <Center>
      <Container maxW='4xl' alignItems='left' rounded='md' bg="orange.50" centerContent>
      <Work/>
      </Container>
      </Center>
    </ChakraProvider>
    
  );
}

export default App;