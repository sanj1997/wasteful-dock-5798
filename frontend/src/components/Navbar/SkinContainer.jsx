import { Box, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Navbar.module.css"

const SkinContainer = () => {
    return (
        <div>
            <SimpleGrid columns={5} spacing={10} mt={1} border="1px solid #D3D3D3" p={3} zIndex={2} bg={"#FFF"} ml={"-8%"} w={"90%"}>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <Link to={"/skin"}><ListItem className={Styles.container_list} fontWeight="bold" >Moisturizers</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Cream</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Night Cream</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Oils</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Serum & Essence</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>All Purpose Gels/Creams</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Cleansers</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Wash</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Cleanser</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Micellar Water</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Wipes</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Makeup Remover</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Scrubs & Exfoliators</ListItem></Link>
                    </UnorderedList>
                </Box>
                <Box bg={"#FAFAFA"}>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold">Trending Searches</ListItem></Link>

                        <Link to="/skin" ><ListItem className={Styles.container_list}>Toners Under 1000</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Wash For Oily Skin</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Oil Free Face</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Moisturizers</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Lip Balm Under 500</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Vitamin C Serum</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Masks</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Sheet Masks</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Sleeping Masks</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Masks & Peels</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Packs</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Bieach</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Toners</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Toners & Mists</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Rose Water</ListItem></Link>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold">Body Care</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Lotions & Creams</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Body & Butter</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Massage Oils</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Shower Gels & Body</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Wash</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Scrubs & Loofahs</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Bath Salts</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Hand & Feet</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Hand Creams</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Foot Creams</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Hand & Foot Masks</ListItem></Link>
                    </UnorderedList>
                </Box>
                <Box bg={"#FAFAFA"}>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" >Special Skincare</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Acne Spot Correctors</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Nose Strips</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Facial Peels</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Eye Care</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Eye Cream & Serums</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Eye Masks</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Lip Care</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Lip Balm</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Lip Scrubs</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Lip Masks</ListItem></Link>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" >Kits & Combos</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Facial Kits</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Combos @ Nykaa</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Gift Sets</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Skin Tools</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Face Massagers</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Cleansing Brushes</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Blackhead Remover</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Dermarollers</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Skin Supplements</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Vitamins & Minerals</ListItem></Link>
                        <Link to="/skin" ><ListItem className={Styles.container_list}>Ayurvedic Herbs</ListItem></Link>
                    </UnorderedList>
                </Box>


            </SimpleGrid>
        </div>
    )
}

export default SkinContainer
