import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const UpperLowerFooter = () => {
    return (
        <Box>

            <SimpleGrid columns={{ md: 2, lg: 4 }} spacing='40px'height="25vh">
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>
        </Box>
    )
}

export default UpperLowerFooter
