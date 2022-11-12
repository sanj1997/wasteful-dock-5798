
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  Img,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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
    desc: "On Entire Collection. Hurry Up!",
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
    desc: "Expert skin care validated by determats",
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

let featuredArr = [
  {
    img: "https://images-static.nykaa.com/uploads/6ea1c6f1-6e7a-434d-ba45-67e778d47b4b.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 50% Off",
    desc: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/uploads/ada05424-3436-4f3d-9c51-dae9c0733466.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 35% Off",
    desc: "Extra 5% Off on Rs. 399+",
  },
  {
    img: "https://images-static.nykaa.com/uploads/af94358f-87a6-484a-b105-63b92e9019d6.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 35% Off",
    desc: "Free Body Mist mini trio on Rs.599+",
  },
  {
    img: "https://images-static.nykaa.com/uploads/02a3c530-711c-4fb0-89a8-ee68215eddc3.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 30% Off + Free Face Scrub",
    desc: "Worth Rs. 249 on Rs. 799",
  },
  {
    img: "https://images-static.nykaa.com/uploads/e56f43f6-0f07-412f-a300-8ffde7036a8c.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 20% Off + Select your free",
    desc: "worth Rs. 799 on Rs. 999",
  },
  {
    img: "https://images-static.nykaa.com/uploads/88264610-8b99-45e1-936b-f76fb5f0ee7b.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 32% Off",
    desc: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/uploads/52d3c769-9f88-4912-ab09-88789acf17fd.jpg?tr=w-300,cm-pad_resize",
    offer: "Flat 15% Off + Additional 10% Off on",
    desc: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/uploads/4ba71dba-03c2-4eac-8347-f5d6dea6240d.jpg?tr=w-300,cm-pad_resize",
    offer: "Flat 15% Off",
    desc: "On Entire Range",
  },
  {
    img: "https://images-static.nykaa.com/uploads/aedce902-5bcc-4ed1-a28c-5ab2b3c2fed4.jpg?tr=w-300,cm-pad_resize",
    offer: "Upto 20% Off",
    desc: "5% Off On Rs.1200+",
  },
  {
    img: "https://images-static.nykaa.com/uploads/38ce9084-1f44-4e79-bee7-f561e45acef9.gif?tr=w-300,cm-pad_resize",
    offer: "Buy 2 Get 1",
    desc: "On the Entire Range",
  },
];

let threePhotosArr = [
  {
    img: "https://images-static.nykaa.com/uploads/ea13aa95-2adf-4686-ab33-b2fabca4edc2.jpg?tr=w-600,cm-pad_resize",
    offer: "Complimentary Yves Saint Laurent Pouch",
    desc: "On Purchase of Bestsellers",
  },
  {
    img: "https://images-static.nykaa.com/uploads/f17129eb-c43a-41c8-98ab-88db86c79957.jpg?tr=w-600,cm-pad_resize",
    offer: "Flat 10% Off on Combos!",
    desc: "On Purchase of Bestsellers",
  },
  {
    img: "https://images-static.nykaa.com/uploads/25f04cf1-475c-4172-a33b-006159ebc06e.jpg?tr=w-600,cm-pad_resize",
    offer: "Upto 40% Off",
    desc: "On Hair Removal Heroes",
  },
];

let categoryArr = [
  "https://images-static.nykaa.com/uploads/101ccea5-08c4-4ea7-86b3-dd4fcaf6c9a3.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/93889767-e36a-427c-a2d6-dc20119d6262.jpg?tr=w-1200,cm-pad_resize",
];

let buyingGuidsArr = [
  "https://images-static.nykaa.com/uploads/49107f55-65ef-45d8-ac06-274c1002677c.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/be5e2237-abe2-4fba-810d-d3780ea32298.jpg?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/238eab67-52ce-4e51-91a1-b633d791c6e4.gif?tr=w-600,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0bd0130b-3270-4b06-9a5e-05a8bef3e139.jpg?tr=w-600,cm-pad_resize",
];

const Home = () => {
  const [imgId, setImgId] = useState(0);
  const [secImg, setSecImg] = useState(0);

  const slidingFun = (val) => {
    if (imgId === 0 && val === -1) {
      setImgId(categoryArr.length - 1);
    } else if (imgId === categoryArr.length - 1 && val === 1) {
      setImgId(0);
    } else {
      setImgId(imgId + val);
    }
  };

  const secondSlideFun = (val) => {
    if (secImg === 0 && val === -1) {
      setSecImg(buyingGuidsArr.length - 1);
    } else if (secImg === buyingGuidsArr.length - 1 && val === 1) {
      setSecImg(0);
    } else {
      setSecImg(secImg + val);
    }
  };
  return (
    <>
      <Flex m="0%" p="0%" boxSizing="border-box">
        <Box width="100%">
          <Box width="100%" m="auto">
            <Carousel>
              {firstCarousel.map((el, id) => (
                <Carousel.Item key={id}>
                  <img
                    className="d-block w-100"
                    src={el.img}
                    alt="First slide"
                  />
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
              letterSpacing="normal"
              mt="1rem"
              mb="1rem"
            >
              TOP BRANDS
            </Text>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={8}
              width="80%"
              m="auto"
              position="relative"
              textAlign="center"
            >
              {topBrandsArr.map((el, id) => (
                <>
                  <Box
                    width="100%"
                    textAlign="center"
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                    key={id}
                    position="relative"
                    _hover={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                  >
                    <Img src={el.img} width="100%" />
                    <Box
                      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                      position="absolute"
                      top="88%"
                      left="2%"
                      w="95%"
                      m="auto"
                      borderRadius="4px"
                      backgroundColor="white"
                      lineHeight="6"
                      textAlign="center"
                    >
                      <Text color="#fc2779" fontSize="18px">
                        {el.offer}
                      </Text>
                      <Text fontSize="16px"> {el.desc} </Text>
                    </Box>
                  </Box>
                </>
              ))}
            </Grid>

            <Text
              textAlign="center"
              fontSize="24px"
              fontWeight="normal"
              coor="#3f414d"
              letterSpacing="normal"
              mt="3rem"
              mb="1rem"
            >
              FEATURED BRANDS
            </Text>

            <Grid
              templateColumns={[
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={4}
              width="75%"
              m="auto"
              position="relative"
              textAlign="center"
              alignItems="center"
            >
              {featuredArr.map((el, id) => (
                <Box
                  key={id}
                  m="auto"
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <Box>
                    <Img src={el.img} />
                  </Box>
                  <Box
                    w="full"
                    m="auto"
                    borderRadius="2px"
                    backgroundColor="white"
                    lineHeight="16px"
                    textAlign="center"
                  >
                    <br />
                    <Text color="#fc2779" fontSize="14px">
                      {el.offer}
                    </Text>
                    <Text fontSize="14px" mb="1rem">
                      {" "}
                      {el.desc}{" "}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              w="75%"
              m="auto"
              mt="2rem"
              gap={7}
              position="relative"
            >
              {threePhotosArr.map((el, id) => (
                <Box
                  key={id}
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <Box
                    width="100%"
                    textAlign="center"
                    boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                    key={id}
                    position="relative"
                  >
                    <Img src={el.img} width="100%" />
                    <Box
                      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
                      position="absolute"
                      top="88%"
                      left="2%"
                      w="95%"
                      m="auto"
                      borderRadius="4px"
                      backgroundColor="white"
                      lineHeight="6"
                      textAlign="center"
                    >
                      <Text color="#fc2779" fontSize="18px">
                        {el.offer}
                      </Text>
                      <Text fontSize="16px"> {el.desc} </Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Box mt="2rem" backgroundColor="#f3f3f3">
              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="normal"
                coor="#3f414d"
                letterSpacing="normal"
                mt="2rem"
              >
                CATEGORY IN FOCUS
              </Text>

              <Flex p={2} alignItems="center" width="90%" m="auto">
                <Box
                  cursor={"pointer"}
                  fontSize={"30px"}
                  bg={"white"}
                  p={2}
                  borderRadius="50%"
                  position={"absolute"}
                  right="87%"
                  onClick={() => slidingFun(-1)}
                >
                  <BiChevronLeft />
                </Box>
                <Img
                  src={categoryArr[imgId]}
                  alt=""
                  width="100%"
                  borderRadius="8px"
                  h={"250px"}
                  transition="2s"
                />
                <Box
                  cursor={"pointer"}
                  fontSize={"30px"}
                  bg={"white"}
                  p={2}
                  borderRadius="50%"
                  position={"absolute"}
                  left="87%"
                  onClick={() => slidingFun(1)}
                >
                  <BiChevronRight />
                </Box>
              </Flex>
              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="normal"
                coor="#3f414d"
                letterSpacing="normal"
                mt="1rem"
              >
                BUYING GUIDES
              </Text>
              <Container height="95%">
                <Carousel className="w-80">
                  {buyingGuidsArr.map((el, id) => (
                    <Carousel.Item key={id}>
                      <img
                        className="d-block w-90"
                        src={el}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Container>

              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="normal"
                coor="#3f414d"
                letterSpacing="normal"
                mt="1rem"
              >
                GIFT CARD
              </Text>

              <Container
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              >
                <Img src="https://images-static.nykaa.com/uploads/98a30133-4e10-49d0-b1f7-80d97faa33ff.jpg?tr=w-600,cm-pad_resize" />
              </Container>

              <Box
                m="auto"
                mt="3rem"
                width="80%"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              >
                <Img
                  src="https://images-static.nykaa.com/uploads/3df85e95-5d80-46b7-a8fb-75fd485c35ba.jpg?tr=w-1200,cm-pad_resize"
                  width="1200px"
                  height="100px"
                  m="auto"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                />
              </Box>

              <Box
                m="auto"
                mt="3rem"
                width="80%"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              >
                <Img
                  src="https://images-static.nykaa.com/uploads/1462f351-b1c2-49c0-a68a-6357b6fb4e97.jpg?tr=w-1200,cm-pad_resize"
                  m="auto"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                />
              </Box>

              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="normal"
                coor="#3f414d"
                letterSpacing="normal"
                mt="1rem"
              >
                POP-UP STORES
              </Text>

              <Flex width="80%" gap={2} m="auto">
                <Box
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  {" "}
                  <Img
                    src="https://images-static.nykaa.com/uploads/9531931b-cdda-4132-b117-33346d9afafe.gif?tr=w-600,cm-pad_resize"
                    width="100%"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  />
                </Box>
                <Box
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  {" "}
                  <Img
                    src="https://images-static.nykaa.com/uploads/ecf5057b-a298-4f19-8a70-aec6f3244b12.jpg?tr=w-600,cm-pad_resize"
                    width="100%"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  />
                </Box>
              </Flex>

              <Text
                textAlign="center"
                fontSize="24px"
                fontWeight="normal"
                coor="#3f414d"
                letterSpacing="normal"
                mt="1rem"
              >
                SPECIAL CURATIONS
              </Text>

              <Flex width="80%" gap={2} m="auto">
                <Box
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  {" "}
                  <Img
                    src="https://images-static.nykaa.com/uploads/e2bf223b-ba25-4417-833d-8d864cbdd299.jpg?tr=w-600,cm-pad_resize"
                    width="100%"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  />
                </Box>
                <Box
                  _hover={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  }}
                >
                  <Img
                    src="https://images-static.nykaa.com/uploads/b32ddcf1-b431-4819-8eda-05959b32d131.gif?tr=w-600,cm-pad_resize"
                    width="100%"
                    boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  />
                </Box>
              </Flex>

              <Box
                m="auto"
                mt="3rem"
                mb="3rem"
                width="80%"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                }}
              >
                <Img
                  src="https://images-static.nykaa.com/uploads/58c1c0b0-5a0b-4614-acfc-3205e669d8a7.jpg?tr=w-1200,cm-pad_resize"
                  m="auto"
                  width="1200px"
                  height="100px"
                  boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Home;

