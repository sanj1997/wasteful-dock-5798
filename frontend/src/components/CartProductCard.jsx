import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'

const CartProductCard = () => {
    return (
        <Box border="1px solid #D3D3D3" borderRadius="10px" my={4}>
            <Flex  p={2} align="center" justify="space-between" >
                <Box w="25%" p={5}>
                    <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/c/6cbb1f75060332327591_0.jpg" />
                </Box>
                <Box px={3}  w="55%" m="auto">
                    <Text fontWeight="500" fontSize="15px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </Text>
                    <Text fontSize="14px" color="gray">
                        <span>3.5g</span> <span>Pillow talk</span>
                    </Text>

                </Box>
                <Box w="10%">
                    <IconButton
                        variant='outline'
                        colorScheme='black'
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<DeleteIcon />}
                    />
                </Box>
            </Flex>
            <Flex borderTop="1px solid #D3D3D3" justify={"space-between"} px={3} align="center">
                <Box>
                    <Select placeholder='Quantity : 1' border="none">
                        <option value="1">Quantity : 1</option>
                        <option value="2">Quantity : 2</option>
                        <option value="3">Quantity : 3</option>
                        <option value="4">Quantity : 4</option>
                        <option value="5">Quantity : 5</option>
                    </Select>

                </Box>
                <Box>
                    <Text fontWeight="bold">Total</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default CartProductCard
