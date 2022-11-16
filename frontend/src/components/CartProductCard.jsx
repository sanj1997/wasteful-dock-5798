import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Image, Select, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartData, getCartData, updateCartData } from '../store/Cart/cart.action'

const CartProductCard = ({ el, qty }) => {


    const toast = useToast()
    const { message } = useSelector((store) => store.cart)
    const { brand, image1, price, title, _id } = el
    const { userId } = useSelector((store) => store.auth)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteCartData(id)).then(() => {
            toast({
                description:"Item removed successfully" ,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            dispatch(getCartData(userId))
        })
    }

    const handleUpdate = (e) => {
        dispatch(updateCartData(_id, e.target.value)).then(() => {
            toast({
                description: "Item updated successfully" ,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
            })
            dispatch(getCartData(userId))
        })
    }
    return (
        <Box border="1px solid #D3D3D3" borderRadius="10px" my={4}>
            <Flex p={2} align="center" justify="space-between" >
                <Box w="25%" p={5}>
                    <Image src={image1} />
                </Box>
                <Box px={3} w="55%" m="auto">
                    <Text fontWeight="500" fontSize="15px">{title}</Text>
                    <Text fontSize="14px" color="gray">
                        {brand}
                    </Text>

                </Box>
                <Box w="10%">
                    <IconButton
                        onClick={() => handleDelete(_id)}
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
                    <Select onChange={(e) => handleUpdate(e)} placeholder={`Quantity: ${qty}`} border="none">
                        <option value="1">Quantity : 1</option>
                        <option value="2">Quantity : 2</option>
                        <option value="3">Quantity : 3</option>
                        <option value="4">Quantity : 4</option>
                        <option value="5">Quantity : 5</option>
                    </Select>

                </Box>
                <Box>
                    <Text fontWeight="bold">{price}</Text>
                </Box>
            </Flex>
        </Box>
    )
}

export default CartProductCard
