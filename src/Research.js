import React from 'react';
import { Card, CardBody, Divider, Badge} from '@chakra-ui/react';
import { Box, Stack} from '@chakra-ui/react';
import { Text, Heading, Image } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';

// load data
import thumbnail_event from "./research/eventfulness/thumbnail.png"
import thumbnail_recapture from "./research/recapture/thumbnail.png"
import thumbnail_hand from "./research/hand/thumbnail_small.png"

const projects=[{title:"Eventfulness for Interactive Video Alignment",
                 thumbnail: thumbnail_event,
                 venue:"SIG23",
                 authors:"Jiatian Sun, Longxiulin Deng, Triantafyllos Afouras,\n Andrew Owens, Abe Davis",
                 web:"https://www.cs.cornell.edu/abe/projects/eventfulness/",
                 abstract:"Humans are remarkably sensitive to the alignment of visual events with other stimuli, which makes synchronization one of the hardest tasks in video editing. A key observation of our work is that most of the alignment we do involves salient localizable events that occur sparsely in time. By learning how to recognize these events, we can greatly reduce the space of possible synchronizations that an editor or algorithm has to consider."
                },
                {title:"ReCapture: AR-Guided Time-lapse Photography",
                thumbnail: thumbnail_recapture,
                venue:"UIST22",
                authors:"Ruyu Yan, Jiatian Sun, Longxiulin Deng, Abe Davis",
                web:"https://www.cs.cornell.edu/abe/projects/recapture/",
                abstract:"We present ReCapture, a system that leverages AR-based guidance to help users capture time-lapse data with hand-held mobile devices. ReCapture works by repeatedly guiding users back to the precise location of previously captured images so they can record time- lapse videos one frame at a time without leaving their camera in the scene."
                },
                {title:"Characterizing Continuous Manipulation Families for Dexterous Soft Robot Hands",
                thumbnail: thumbnail_hand,
                venue:"Frontiers21",
                authors:"Jiatian Sun, Jonathan P. King, Nancy S. Pollard",
                web:"https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2021.645290/full",
                abstract:"Soft robot hands offer benefits of low-cost, compliance, and customized design, with the promise of dexterity and robustness. However, new tools are needed to understand the capabilities of such manipulators and to facilitate manipulation planning with soft manipulators that exhibit free-form deformations. To address this challenge, we introduce a sampling based approach to discover and model continuous families of manipulations for soft robot hands."
                }]

export default function Work()
{   
    return (
            <Box position='relative'  border='1px' borderColor='orange.50' p={10}>
                    <Heading px={2} py={2} fontSize='25px' color='blackAlpha.700' fontFamily="Chalkduster, fantasy" textAlign="left">Past Work</Heading>
                    <Divider orientation='horizontal' borderColor='blackAlpha.700' borderWidth={2} rounded='md'/>
                    <Stack my={5} spacing='4' color='blackAlpha.700' fontFamily="Comic Sans MS, Comic Sans, cursive" bg="orange.50">
                    {projects.map(function(projectProps) {
                        return (
                            <LinkBox align="left" rounded='md'>
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                color='blackAlpha.700'
                                backgroundColor='orange.50'
                                border='2px'
                                borderColor='blackAlpha.300'
                                >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={projectProps.thumbnail}
                                />
                                <LinkOverlay href={projectProps.web}>
                                <Stack>
                                    <CardBody>
                                        <Heading size='md' fontFamily="Comic Sans MS, Comic Sans, cursive">{projectProps.title + " "} <Badge colorScheme='purple' textAlign="center">{projectProps.venue}</Badge></Heading>
                                        <Text pt='1' pb='2' fontSize='md' fontWeight="bold">{projectProps.authors}</Text>
                                        
                                        <Text py='0' fontSize="sm">
                                            {projectProps.abstract}
                                        </Text>
                                    </CardBody>
                                </Stack>
                                </LinkOverlay>
                            </Card>
                            </LinkBox>
                        );
                    })}
                    </Stack>
            </Box>
        )
}