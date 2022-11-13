import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const ProductPagination = ({currentPage, totalPage, setPage}) => {
	
	let newArr = new Array(totalPage).fill(0);

	// console.log(newArr);

	return (
		<>
			<Flex gap = {"100px"} alignItems='center' fontSize={'18px'}>
				<Text>Page {currentPage} of {totalPage}</Text>
				<Flex gap = {2} alignItems='center'>
					<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						1
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500}cursor="pointer">
						<BiChevronLeft fontSize={'30px'} />
					</Flex>

					<Flex>
						{newArr.map((e, i)=>(
							<Flex alignItems={'center'} justifyContent={'center'} bg={i+1===currentPage ? "white" : ""} p={2} width={"40px"} color={i+1===currentPage ? "rgb(253,38,121)" : ""} height="40px" borderRadius="50%" fontWeight={500}cursor="pointer" _hover={{backgroundColor: 'white'}} gap={3} onClick={() => setPage(i+1)} key={i}>
							{i + 1}
						</Flex>
						))}
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						<BiChevronRight fontSize={'30px'}/>
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500} >
						{totalPage}
					</Flex>
				</Flex>
		</Flex>
		</>
	)
};

export default ProductPagination;