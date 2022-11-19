import { Box } from '@chakra-ui/react'
import React from 'react'
import LowerNavbar from './LowerNavbar'
import MiddleNavbar from './MiddleNavbar'
import TopNavbar from './TopNavbar'

const Navbar = () => {
    return (
        <Box position={"sticky"} top="0" zIndex={"200"} bg="white">
            <TopNavbar />
            <MiddleNavbar />
            <LowerNavbar />
        </Box>
    )
}

export default Navbar
