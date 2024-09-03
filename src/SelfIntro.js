import React from 'react';
import YarnDiv from './YarnDivider'
import { Logo } from './Logo';
import { Stack, Card, CardBody, VStack, HStack, Text } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FiFileText, FiGithub, FiLinkedin} from "react-icons/fi";
import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import Pdf from './files/Jiatian_Sun_resume.pdf'

// h="30vmin"
export const Intro = props => {
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            color='blackAlpha.700'
            backgroundColor='orange.50'
            border='0px'
            p={10}
            >
            <VStack align="center" pt={10}>
              <Logo maxW={{ base: '100%', sm: '200px' }} pointerEvents="none" /> 
              <HStack>
                  <LinkBox align="center" rounded='md'>
                  <LinkOverlay href="https://github.com/jiatiansun">
                  <Icon as={FiGithub} boxSize={6} focusable={true}></Icon>
                  </LinkOverlay>
                  </LinkBox>
                  <LinkBox align="center" rounded='md'>
                  <LinkOverlay href="https://www.linkedin.com/in/jiatians/">
                  <Icon as={FiLinkedin} boxSize={6} focusable={true}></Icon>
                  </LinkOverlay>
                  </LinkBox>
                  <LinkBox align="center" rounded='md'>
                  <LinkOverlay href={Pdf} target="_blank" >
                  <Icon as={FiFileText} boxSize={6} focusable={true}></Icon>
                  </LinkOverlay>
                  </LinkBox>
              </HStack>
          </VStack>
            <Stack>
                <CardBody>
                    <Text px={10} pt="3em" fontFamily="Chalkduster, fantasy" fontSize="2xl" textAlign={['left']} verticalAlign="baseline">
                        Hi! I am Jiatian (Caroline) Sun,
                    </Text>
                    <YarnDiv/>
                    <Text fontSize="md" textAlign={['left']}>
                        a Cornell CS graduate student working on physically-based simulation of fibers under the advisory of Steve Marschner.
                        Other animation-relevant topics like contact, solid mechanics, character animation, and robotics also interest me! 
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    );
  };
