import { Flex, Highlight, Text } from '@chakra-ui/react'
import React from 'react'

const AddressCard = ({el}) => {
    console.log(el)
    const {pin,house,road,name,phone,email}=el
  return (
    <Flex padding={"1rem"} borderRadius={"10px"} border={"2px dotted #d53f8c"} flexDirection={"column"}>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"Pin"}>{`Pin: ${pin}`}</Highlight></Text>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"House No"}>{`House No: ${house}`}</Highlight></Text>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"Road"}>{`Road: ${road}`}</Highlight></Text>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"Name"}>{`Name: ${name}`}</Highlight></Text>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"Phone No"}>{`Phone No: ${phone}`}</Highlight></Text>
        <Text><Highlight styles={{color:"#d53f8c",fontWeight:"bold"}} query={"Email"}>{`Email: ${email}`}</Highlight></Text>
    </Flex>
  )
}

export default AddressCard