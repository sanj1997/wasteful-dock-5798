import { Box, Button, Flex, Img } from '@chakra-ui/react';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import React from 'react';
import { useState } from 'react';

const SlidingWindow = ({imgArr}) => {
	const [imgId, setImgId] = useState(0);

	const slidingFun = (val) =>{
		if(imgId === 0 && val === -1){
			setImgId(imgArr.length-1);
		}else if(imgId === imgArr.length-1 && val === 1){
			setImgId(0);
		}else{
			setImgId(imgId + val);
		}
	}

	return (
		<>
		<Flex p={10} alignItems="center">
			<Box cursor={'pointer'} fontSize={'30px'} bg={'white'} p={2} borderRadius='50%' position={'absolute'} right="93%" onClick={()=> slidingFun(-1)}><BiChevronLeft /></Box>
			<Img src={imgArr[imgId]} alt='' width='100%' borderRadius={10} h={"250px"}/>
			<Box cursor={'pointer'} fontSize={'30px'} bg={'white'} p={2} borderRadius='50%' position={'absolute'} left="93%" onClick={()=> slidingFun(1)}><BiChevronRight /></Box>
		</Flex>
		<Flex justify={'center'} gap='12px' pb={10}>
      {imgArr.map((e, i)=>(
        <Box bg={imgId == i ? 'rgb(250,90,152)' : 'rgb(244,192,213)'} borderRadius='50%' width='11px' height={'11px'} key={i}></Box>
      ))}
    </Flex>
		</>
	)
} 

export default SlidingWindow;