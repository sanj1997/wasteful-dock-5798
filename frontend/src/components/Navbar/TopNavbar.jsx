import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import top_nav from "../../assets/pngs/top_nav.png"
import Typed from 'react-typed';

const TopNavbar = () => {
    return (
        <Box>
            <Box position={"relative"}>
                <Image src={top_nav} />
            </Box>
            <Box position={"absolute"} top="8px" left={"10%"}>

                <Text fontWeight={"500"}>
                    <Typed
                        strings={[
                            'BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        showCursor={false}
                    >
                    </Typed> </Text>
            </Box>
        </Box>
    )
}

export default TopNavbar
