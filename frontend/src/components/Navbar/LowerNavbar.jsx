import { Box, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { ModalHover } from 'react-modal-hover'
import MakeupContainer from './MakeupContainer'
import Styles from "./Navbar.module.css"
import SkinContainer from './SkinContainer'

const LowerNavbar = () => {
    return (
        <Box borderBottom={"1px solid #D3D3D3"} h="50px">
            <Flex w="80%" align={"center"} h="full" m={"auto"}>
                <UnorderedList className={Styles.list} styleType={"none"} top="30">
                    <ListItem className={Styles.ListItem}>
                        <Text>Makeup</Text>
                        <Box className={Styles.container}>
                            <MakeupContainer />
                        </Box>
                    </ListItem>
                    <ListItem className={Styles.ListItem}>
                        <Text>Skin</Text>
                        <Box className={Styles.container}>
                            <SkinContainer />
                        </Box>
                    </ListItem>
                    <ListItem className={Styles.ListItem}>Hair</ListItem>
                    <ListItem className={Styles.ListItem}>Appliances</ListItem>
                    <ListItem className={Styles.ListItem}>Bath & Body</ListItem>
                    <ListItem className={Styles.ListItem}>Nautral</ListItem>
                    <ListItem className={Styles.ListItem}>Mom & Baby</ListItem>
                    <ListItem className={Styles.ListItem}>Health & Wellness</ListItem>
                    <ListItem className={Styles.ListItem}>Men</ListItem>
                    <ListItem className={Styles.ListItem}>Fragrance</ListItem>
                    <ListItem className={Styles.ListItem}>Pop Ups</ListItem>
                    <Image src="" />
                </UnorderedList>

            </Flex>

        </Box>
    )
}

export default LowerNavbar
