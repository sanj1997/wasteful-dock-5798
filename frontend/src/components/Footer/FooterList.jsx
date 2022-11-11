import { Box, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Styles from "../../Styles/Footer.module.css"

const FooterList = () => {
    return (
        <Box bg={"#8c8d94"} color="white">
            <SimpleGrid columns={{ md: 3, lg: 5 }} spacing={10} w={["90%", "80%"]} m={"auto"} p={5}>
                <Box>
                    <UnorderedList className={Styles.List} styleType="none" lineHeight="25px">
                        <Image src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png" h={"40px"} />
                        <ListItem className={Styles.ListItem}>Who are we?</ListItem>
                        <ListItem className={Styles.ListItem}>Careers</ListItem>
                        <ListItem className={Styles.ListItem}>Authenticity</ListItem>
                        <ListItem className={Styles.ListItem}>ListItemress</ListItem>
                        <ListItem className={Styles.ListItem}>Testimonials</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa CSR</ListItem>
                        <ListItem className={Styles.ListItem}>Responsible Disclosure</ListItem>
                        <ListItem className={Styles.ListItem}>Investor Relations</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList lineHeight="25px" styleType="none" fontSize={"12px"}>
                        <ListItem fontSize={"14px"} mb={3} fontWeight="bold" >Help</ListItem>
                        <ListItem className={Styles.ListItem}>Contact Us</ListItem>
                        <ListItem className={Styles.ListItem}>Frequently asked questions</ListItem>
                        <ListItem className={Styles.ListItem}>Store Locator</ListItem>
                        <ListItem className={Styles.ListItem}>Cancellation & Return</ListItem>
                        <ListItem className={Styles.ListItem}>Shipping & Delivery</ListItem>
                        <ListItem className={Styles.ListItem}>Sell on Beautiva</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList lineHeight="25px" styleType="none" fontSize={"12px"}>
                        <ListItem fontSize={"14px"} mb={3} fontWeight="bold" >Inspire Me</ListItem>
                        <ListItem className={Styles.ListItem}>Beauty Book</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa TV</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa Network</ListItem>
                        <ListItem className={Styles.ListItem}>Buying Guides</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList lineHeight="25px" styleType="none" fontSize={"12px"}>
                        <ListItem fontSize={"14px"} mb={3} fontWeight="bold" >Quick Links</ListItem>
                        <ListItem className={Styles.ListItem}>Offer Zone</ListItem>
                        <ListItem className={Styles.ListItem}>New Launches</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa Man</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa Fashion</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa Pro</ListItem>
                        <ListItem className={Styles.ListItem}>Nykaa femina beauty awards <br /> winners 2019</ListItem>
                        <ListItem>Sitemap</ListItem>
                    </UnorderedList>
                </Box>
                <Box>
                    <UnorderedList lineHeight="25px" styleType="none" fontSize={"12px"}>
                        <ListItem fontSize={"14px"} mb={3} fontWeight="bold" >Top Categories</ListItem>
                        <ListItem className={Styles.ListItem}>Makeup</ListItem>
                        <ListItem className={Styles.ListItem}>Skin</ListItem>
                        <ListItem className={Styles.ListItem}>Hair</ListItem>
                        <ListItem className={Styles.ListItem}>Personal Care</ListItem>
                        <ListItem className={Styles.ListItem}>Appliances</ListItem>
                        <ListItem className={Styles.ListItem}>Mom and Baby</ListItem>
                        <ListItem className={Styles.ListItem}>Wellness</ListItem>
                        <ListItem className={Styles.ListItem}>Fragrance</ListItem>
                        <ListItem className={Styles.ListItem}>Natura</ListItem>
                        <ListItem className={Styles.ListItem}>Luxe</ListItem>
                    </UnorderedList>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default FooterList
