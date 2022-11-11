import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const ProductPagination = ({currentPage, totalPage}) => {
	return (
		<>
		<Flex gap = {"200px"} alignItems='center' fontSize={'18px'}>
			<Text>Page {currentPage} of {totalPage}</Text>
			<Flex gap = {2} alignItems='center'>
				<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
					1
				</Flex>

				<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500}cursor="pointer">
					<BiChevronLeft fontSize={'30px'} />
				</Flex>
				

				<Flex gap = {2} alignItems='center'>
					<Flex alignItems={'center'} justifyContent={'center'} p={2} width={"40px"} height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						{currentPage - 2}
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} p={2} width={"40px"} height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						{currentPage - 1}
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} bg={'white'} p={2} width={"40px"} color="rgb(253,38,121)" height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						{currentPage}
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} p={2} width={"40px"} height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						{currentPage + 1}
					</Flex>

					<Flex alignItems={'center'} justifyContent={'center'} p={2} width={"40px"} height="40px" borderRadius="50%" fontWeight={500} cursor="pointer">
						{currentPage + 2}
					</Flex>
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