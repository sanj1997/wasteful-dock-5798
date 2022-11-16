import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'


const CartDetails = () => {
 
    const {total,data}=useSelector((store)=>store.cart)
    
    return (
        <Accordion allowToggle border={"1px solid #D3D3D3"} w={["35vw","30vw","28vw", "22vw"]} borderRadius={"10px"} mt={10}>
            <AccordionItem border="none">

                <AccordionButton w={["35vw","30vw","28vw", "22vw"]} >
                    <Flex gap={[10,12,16,24]} fontWeight="bold">
                        <Text>Price Details</Text>
                        <Text>{`₹ ${total}`}</Text>
                    </Flex>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    <SimpleGrid columns={2} spacing={2} p={2}>
                        <Box>
                            <Text fontSize="12px">{`Bag MRP (${data.length} items)`}</Text>
                        </Box>
                        <Box textAlign="right">
                            <Text fontSize="12px">₹ <span>{total}</span></Text>
                        </Box>
                        <Box>
                            <Text fontSize="12px"> Shipping <InfoOutlineIcon w="10px" /></Text>
                        </Box>
                        <Box textAlign="right">
                            <Text fontSize="12px"><span style={{ "textDecoration": "line-through" }}>₹70</span> Free</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold">You Pay</Text>
                        </Box>
                        <Box textAlign="right">
                            <Text fontWeight="bold">₹ <span>{total}</span></Text>
                        </Box>
                    </SimpleGrid>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default CartDetails
