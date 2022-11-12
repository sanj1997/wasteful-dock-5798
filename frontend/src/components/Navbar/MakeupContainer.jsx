import { Box, Heading, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Styles from "./Navbar.module.css"

const MakeupContainer = () => {
  return (
    <div>
      <SimpleGrid columns={5} spacing={10} mt={1} border="1px solid #D3D3D3" p={3} zIndex={5} bg={"#FFF"}>
        <Box>
          <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
            <ListItem className={Styles.container_list} fontWeight="bold" pt={4}>Face</ListItem>
            <ListItem className={Styles.container_list}>Face Primer</ListItem>
            <ListItem className={Styles.container_list}>Concealer</ListItem>
            <ListItem className={Styles.container_list}>Foundation</ListItem>
            <ListItem className={Styles.container_list}>Compact</ListItem>
            <ListItem className={Styles.container_list}>Contour</ListItem>
            <ListItem className={Styles.container_list}>Loose Powder</ListItem>
            <ListItem className={Styles.container_list}>Tinted Moisturizer</ListItem>
            <ListItem className={Styles.container_list}>Blush</ListItem>
            <ListItem className={Styles.container_list}>Bronzer</ListItem>
            <ListItem className={Styles.container_list}>BB & CC Cream</ListItem>
            <ListItem className={Styles.container_list}>Highlighters</ListItem>
            <ListItem className={Styles.container_list}>Setting Spray</ListItem>
            <ListItem className={Styles.container_list}>Makeup Remover</ListItem>
            <ListItem className={Styles.container_list}>Sindoor</ListItem>
          </UnorderedList>
        </Box>
        <Box bg={"#FAFAFA"}>
          <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
            <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Eyes</ListItem>

            <ListItem className={Styles.container_list}>Kajal</ListItem>
            <ListItem className={Styles.container_list}>Eyeliner</ListItem>
            <ListItem className={Styles.container_list}>Mascara</ListItem>
            <ListItem className={Styles.container_list}>Eye Shadow</ListItem>
            <ListItem className={Styles.container_list}>Eye Brow Enhancers</ListItem>
            <ListItem className={Styles.container_list}>Eye Primer</ListItem>
            <ListItem className={Styles.container_list}>False Eyelashes</ListItem>
            <ListItem className={Styles.container_list}>Eye Makeup Remover</ListItem>
            <ListItem className={Styles.container_list}>Under Eye Concealer</ListItem>
            <ListItem className={Styles.container_list}>Contact Lenses</ListItem>
            <ListItem className={Styles.container_list}>Makeup Kits & Combos</ListItem>
            <ListItem className={Styles.container_list}>Makeup Kits</ListItem>
            <ListItem className={Styles.container_list}>Makeup Combos</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
            <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Lips</ListItem>
            <ListItem className={Styles.container_list}>Lips</ListItem>
            <ListItem className={Styles.container_list}>Lipstick</ListItem>
            <ListItem className={Styles.container_list}>Liquid Lipstick</ListItem>
            <ListItem className={Styles.container_list}>Lip Crayon</ListItem>
            <ListItem className={Styles.container_list}>Lip Gloss</ListItem>
            <ListItem className={Styles.container_list}>Lip Liner</ListItem>
            <ListItem className={Styles.container_list}>Lip Plumper</ListItem>
            <ListItem className={Styles.container_list}>Lip Stain</ListItem>
          </UnorderedList>
        </Box>
        <Box bg={"#FAFAFA"}>
          <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
            <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Tools & Brushes</ListItem>
            <ListItem className={Styles.container_list}>Face Brush</ListItem>
            <ListItem className={Styles.container_list}>Eye Brush</ListItem>
            <ListItem className={Styles.container_list}>Lip Brush</ListItem>
            <ListItem className={Styles.container_list}>Brush Sets</ListItem>
            <ListItem className={Styles.container_list}>Brush Cleaners</ListItem>
            <ListItem className={Styles.container_list}>Sponges & Applicators</ListItem>
            <ListItem className={Styles.container_list}>Eyelash Curlers</ListItem>
            <ListItem className={Styles.container_list}>Tweezers</ListItem>
            <ListItem className={Styles.container_list}>Sharpeners</ListItem>
            <ListItem className={Styles.container_list}>Mirrors</ListItem>
            <ListItem className={Styles.container_list}>Makeup Pouches</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <UnorderedList styleType={"none"} fontSize="14px" color={"gray"} lineHeight="25px">
            <ListItem className={Styles.container_list} fontWeight="bold" pt={4} >Top Brands</ListItem>
            <ListItem className={Styles.container_list}>Kay Beauty</ListItem>
            <ListItem className={Styles.container_list}>Huda Beauty</ListItem>
            <ListItem className={Styles.container_list}>Charlotte Tilbury</ListItem>
            <ListItem className={Styles.container_list}>M.A.C</ListItem>
            <ListItem className={Styles.container_list}>Maybelline New York</ListItem>
            <ListItem className={Styles.container_list}>L'Oreal Paris</ListItem>
            <ListItem className={Styles.container_list}>Lakme</ListItem>
            <ListItem className={Styles.container_list}>Nykaa Cosmetics</ListItem>
            <ListItem className={Styles.container_list}>Nyx Pro.Makeup</ListItem>
          </UnorderedList>
        </Box>


      </SimpleGrid>
    </div>
  )
}

export default MakeupContainer
