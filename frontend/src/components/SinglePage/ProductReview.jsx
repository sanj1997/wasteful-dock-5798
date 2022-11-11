import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const ProductReview = ({rating}) => {
	const [togglebar, setTogglebar] = useState("Rating & Reviews");

	return (
		<>
		<Box bg={'white'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}>
			<Flex gap={4} borderBlockEnd='1px solid rgb(220,225,229)' p={4} >
				<Text cursor={'pointer'} color={togglebar ==="Rating & Reviews" ? "rgb(253,38,121)" : ""} fontWeight={500} fontSize='18px' onClick={()=> setTogglebar("Rating & Reviews")}>Rating & Reviews</Text>
				<Text cursor={'pointer'} color={togglebar ==="Product Q&A" ? "rgb(253,38,121)" : ""} fontWeight={500} fontSize='18px' onClick={()=> setTogglebar("Product Q&A")}>Product Q&A</Text>
			</Flex>

			<Flex alignItems={'center'} mt={12} mb={12}>
				<Box width={'47%'} p={8} borderRight="1px solid rgb(220,225,229)">
					<Flex alignItems={'center'} gap = {4}>
						<Heading>{rating} / 5</Heading>
						<Box>
							<Text fontWeight={'medium'}>Overall Rating</Text>
							<Text>5105 verified ratings</Text>
						</Box>
					</Flex>
				</Box>
				<Box width={'50%'} pr={6} pl={6}>
					<Box>
						<Text>Write a review and win 100 reward points !</Text>
						<Button variant={'outline'} mt={2} color="rgb(253,38,121)">Write Review</Button>
					</Box>
				</Box>
			</Flex>
		</Box>
		</>
	)
}

export default ProductReview