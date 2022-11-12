import { Box,Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Widget = ({dimensions,logo,title,figure}) => {
  return (
    <Flex height='200px' backgroundColor='#fff' alignItems='center' padding='0 1rem' gap='2rem' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' borderRadius='6px'>
        <Box height={`${dimensions[0]}px`} width={`${dimensions[1]}px`} marginTop={`${dimensions[2]}px`}>
            <Image src={logo} alt={`${logo}`}/>
        </Box>
        <Box>
            <Text>{title}</Text>
            <Text fontSize='24px' fontWeight='700'>{figure}</Text>
        </Box>
    </Flex>
  )
}

export default Widget
