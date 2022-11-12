import React from 'react'
import FooterList from './FooterList'
import LowerFooter from './LowerFooter'
import UpperFooter from './UpperFooter'
import UpperLowerFooter from './UpperLowerFooter'

const Footer = () => {
    return (
        <>
            <UpperFooter />
            <FooterList />
            <UpperLowerFooter />
            <LowerFooter />
        </>
    )
}

export default Footer
