import { AddIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Flex,
    Box,
    Center,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import AddressForm from './AddressForm'

const AddressModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Flex align={"center"} justify="center
            " border={"2px dotted #D3D3D3"} minH="180px" w="30%" borderRadius={"10px"} _hover={{ background: "#ffe3e8", border: "2px dotted #E80071" }} onClick={onOpen} ref={btnRef}>
                <Box color="#E80071">
                    <Center mb={3}>
                        <AddIcon w={6} h={6} />
                    </Center>
                    <Text fontWeight={"600"}>Add New Address</Text>
                </Box>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize={"30px"}>New Address</DrawerHeader>

                    <DrawerBody>
                     <Box>
                    
                     <AddressForm />
                     </Box>
                        
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>

    )
}

export default AddressModal
