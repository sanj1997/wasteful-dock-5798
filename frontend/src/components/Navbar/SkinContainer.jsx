import { Box, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Navbar.module.css"

const SkinContainer = () => {
    return (
        <div>
            <SimpleGrid columns={5} spacing={10} mt={1} border="1px solid #D3D3D3" p={3} zIndex={5} bg={"#FFF"} ml={"-10%"} w={"90%"}>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <ListItem className={Styles.container_list} fontWeight="bold" >Moisturizers</ListItem>
                        <ListItem className={Styles.container_list}>Cream</ListItem>
                        <ListItem className={Styles.container_list}>Night Cream</ListItem>
                        <ListItem className={Styles.container_list}>Face Oils</ListItem>
                        <ListItem className={Styles.container_list}>Serum & Essence</ListItem>
                        <ListItem className={Styles.container_list}>All Purpose Gels/Creams</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Cleansers</ListItem>
                        <ListItem className={Styles.container_list}>Face Wash</ListItem>
                        <ListItem className={Styles.container_list}>Cleanser</ListItem>
                        <ListItem className={Styles.container_list}>Micellar Water</ListItem>
                        <ListItem className={Styles.container_list}>Face Wipes</ListItem>
                        <ListItem className={Styles.container_list}>Makeup Remover</ListItem>
                        <ListItem className={Styles.container_list}>Scrubs & Exfoliators</ListItem>
                    </UnorderedList>
                </Box>
                <Box bg={"#FAFAFA"}>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <ListItem className={Styles.container_list} fontWeight="bold">Trending Searches</ListItem>

                        <ListItem className={Styles.container_list}>Toners Under 1000</ListItem>
                        <ListItem className={Styles.container_list}>Face Wash For Oily Skin</ListItem>
                        <ListItem className={Styles.container_list}>Oil Free Face</ListItem>
                        <ListItem className={Styles.container_list}>Moisturizers</ListItem>
                        <ListItem className={Styles.container_list}>Lip Balm Under 500</ListItem>
                        <ListItem className={Styles.container_list}>Vitamin C Serum</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Masks</ListItem>
                        <ListItem className={Styles.container_list}>Sheet Masks</ListItem>
                        <ListItem className={Styles.container_list}>Sleeping Masks</ListItem>
                        <ListItem className={Styles.container_list}>Masks & Peels</ListItem>
                        <ListItem className={Styles.container_list}>Face Packs</ListItem>
                        <ListItem className={Styles.container_list}>Face Bieach</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Toners</ListItem>
                        <ListItem className={Styles.container_list}>Toners & Mists</ListItem>
                        <ListItem className={Styles.container_list}>Rose Water</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <ListItem className={Styles.container_list} fontWeight="bold">Body Care</ListItem>
                        <ListItem className={Styles.container_list}>Lotions & Creams</ListItem>
                        <ListItem className={Styles.container_list}>Body & Butter</ListItem>
                        <ListItem className={Styles.container_list}>Massage Oils</ListItem>
                        <ListItem className={Styles.container_list}>Shower Gels & Body</ListItem>
                        <ListItem className={Styles.container_list}>Wash</ListItem>
                        <ListItem className={Styles.container_list}>Scrubs & Loofahs</ListItem>
                        <ListItem className={Styles.container_list}>Bath Salts</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Hand & Feet</ListItem>
                        <ListItem className={Styles.container_list}>Hand Creams</ListItem>
                        <ListItem className={Styles.container_list}>Foot Creams</ListItem>
                        <ListItem className={Styles.container_list}>Hand & Foot Masks</ListItem>
                    </UnorderedList>
                </Box>
                <Box bg={"#FAFAFA"}>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <ListItem className={Styles.container_list} fontWeight="bold" >Special Skincare</ListItem>
                        <ListItem className={Styles.container_list}>Acne Spot Correctors</ListItem>
                        <ListItem className={Styles.container_list}>Nose Strips</ListItem>
                        <ListItem className={Styles.container_list}>Facial Peels</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Eye Care</ListItem>
                        <ListItem className={Styles.container_list}>Eye Cream & Serums</ListItem>
                        <ListItem className={Styles.container_list}>Eye Masks</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Lip Care</ListItem>
                        <ListItem className={Styles.container_list}>Lip Balm</ListItem>
                        <ListItem className={Styles.container_list}>Lip Scrubs</ListItem>
                        <ListItem className={Styles.container_list}>Lip Masks</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <ListItem className={Styles.container_list} fontWeight="bold" >Kits & Combos</ListItem>
                        <ListItem className={Styles.container_list}>Facial Kits</ListItem>
                        <ListItem className={Styles.container_list}>Combos @ Nykaa</ListItem>
                        <ListItem className={Styles.container_list}>Gift Sets</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Skin Tools</ListItem>
                        <ListItem className={Styles.container_list}>Face Massagers</ListItem>
                        <ListItem className={Styles.container_list}>Cleansing Brushes</ListItem>
                        <ListItem className={Styles.container_list}>Blackhead Remover</ListItem>
                        <ListItem className={Styles.container_list}>Dermarollers</ListItem>
                        <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Skin Supplements</ListItem>
                        <ListItem className={Styles.container_list}>Vitamins & Minerals</ListItem>
                        <ListItem className={Styles.container_list}>Ayurvedic Herbs</ListItem>
                    </UnorderedList>
                </Box>


            </SimpleGrid>
        </div>
    )
}

export default SkinContainer
