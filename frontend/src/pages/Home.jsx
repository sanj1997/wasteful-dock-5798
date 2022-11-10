import { Box, Center, Flex, Grid, Img, Text } from "@chakra-ui/react";
import React from "react";

import Carousel from "react-bootstrap/Carousel";

let firstCarousel = [
  {
    img: "https://images-static.nykaa.com/uploads/92eca885-cf81-4b79-95fa-bd3135af445d.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    img: "https://images-static.nykaa.com/uploads/b8c52286-7fbc-4802-a30b-d74c77579f54.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    img: "https://images-static.nykaa.com/uploads/9cb8144c-8b21-41aa-8fa5-822e968ae494.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    img: "https://images-static.nykaa.com/uploads/cc78b00c-5021-4729-baf6-91989b3ef61d.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    img: "https://images-static.nykaa.com/uploads/9769e0c3-5c17-4524-a882-8ea77594b33a.jpg?tr=w-1200,cm-pad_resize",
  },
  {
    img: "https://images-static.nykaa.com/uploads/ceacdf9a-cf81-4c29-8da3-e115292c4135.gif?tr=w-1200,cm-pad_resize",
  },
];

let topBrandsArr = [
  {
    img: "https://images-static.nykaa.com/uploads/75223f87-05e2-4df2-97e2-fb5aa810e68d.jpg?tr=w-600,cm-pad_resize",
    offer: "Flat 20% Off + Free Lip Liner on Rs. 1399",
    desc: "",
  },
  {
    img: "https://images-static.nykaa.com/uploads/acd0eae5-46bf-4ea5-bf47-316fada41d64.jpg?tr=w-600,cm-pad_resize",
    offer: "Exciting New Launches! ",
    desc: "Starting at Rs. 800",
  },
  {
    img: "https://images-static.nykaa.com/uploads/c619ceb6-7e8e-4370-9961-bfdad63439e2.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 35% off",
    desc: "Expert skin care validated by determats",
  },
  {
    img: "https://images-static.nykaa.com/uploads/7e705e04-98af-4d79-9a4c-eb2ce2e9c408.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 35% off ",
    desc: "Face Makeup That Stays Through The Day!",
  },
  {
    img: "https://images-static.nykaa.com/uploads/81a498f9-7e68-4a91-b06c-2f0a8ddc65d5.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 30% Off + Free Perfume ",
    desc: "worth Rs. 299 on Rs. 799 ",
  },
  {
    img: "https://images-static.nykaa.com/uploads/1ce2fd26-9ad5-44ba-9099-f9b44f59cc2d.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 35% Off on Makeup Must-Haves!",
    desc: "",
  },
  {
    img: "https://images-static.nykaa.com/uploads/a8a8ea5d-f1e6-4da6-a917-f717179ac034.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 30% off",
    desc: "On Best Sellers",
  },
  {
    img: "https://images-static.nykaa.com/uploads/9f924092-e9b3-48ab-b637-4359a0546355.jpg?tr=w-600,cm-pad_resize",
    offer: "Explore Luxe New Launches +",
    desc: "Exciting Gifts on purchase!",
  },
];

const Home = () => {
  return (
    <>
      <Carousel>
        {firstCarousel.map((el) => (
          <Carousel.Item>
            <img className="d-block w-100" src={el.img} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>

      <Box width="fit-content" margin="auto" mt="3rem">
        <Img src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize" />
      </Box>

      <Text
        textAlign="center"
        fontSize="24px"
        fontWeight="normal"
        coor="#3f414d"
        letter-spacing="normal"
        mt="1rem"
        mb="1rem"
      >
        TOP BRANDS
      </Text>

      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={8}
        border="1px solid red"
        width="fit-content"
        m="auto"
        position="relative"
        textAlign="center"
      >
        {topBrandsArr.map((el) => (
          <>
            <Box
              width="100%"
              textAlign="center"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
              height="46vh"
            >
              <Img
                src={el.img}
                verticalAlign="bottom"
                width="560px"
                height="315.46px"
              />
              <Box
                boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                position="relative"
                top="-22%"
                left="0%"
                w="97%"
                m="auto"
                borderRadius="2px"
                backgroundColor="white"
                height="10vh"
                lineHeight="16px"
                textAlign="center"
              >
                <br />
                <Text color="#fc2779" fontSize="18px">
                  {el.offer}
                </Text>
                <Text fontSize="16px"> {el.desc} </Text>
              </Box>
            </Box>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Home;
