import React from 'react';
import { Image} from '@chakra-ui/react';
import divider from './media/yarn-unwind-cropped.gif';

// Passing the props of the parent component to the image child
export default function YarnDiv ({props}){
    return <Image src={divider} {...props} />;
};