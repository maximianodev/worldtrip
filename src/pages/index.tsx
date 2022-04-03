import { Box, Container, Divider, Heading, Img, Text, Wrap, WrapItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Bullet from '../components/Bullet'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoHeight={true}
    >
      <SwiperSlide>
        <Img
          src="https://images.unsplash.com/photo-1621848064631-56c4e44c2337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
          alt=""
          w="100%"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Img
          src="https://images.unsplash.com/photo-1627827623351-b34fc0153926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          alt=""
          w="100%"
        />
      </SwiperSlide>
    </Swiper>
  )
}

const Home: NextPage = () => {
  return (
    <Box>
      <Img
        src="/images/banner_desk-1.jpg"
        alt="5 Continentes"
        d={["none", "none", "block"]}
        w="100%"
      />
      <Img
        src="/images/banner_mob-1.jpg"
        alt="5 Continentes"
        d={["block", "block", "none"]}
        w="100%"
      />
      <Container
        maxW="container.lg"
      >
        <Wrap
          spacing="30px"
          p="30px"
          justify={["center", "center", "space-between"]}
        >
          <WrapItem>
            <Bullet
              label="vida noturna"
              image="images/bullet_01.png"
            />
          </WrapItem>
          <WrapItem>
            <Bullet
              label="praia"
              image="images/bullet_02.png"
            />
          </WrapItem>
          <WrapItem>
            <Bullet
              label="moderno"
              image="images/bullet_03.png"
            />
          </WrapItem>
          <WrapItem>
            <Bullet
              label="clássico"
              image="images/bullet_04.png"
            />
          </WrapItem>
          <WrapItem>
            <Bullet
              label="e mais..."
              image="images/bullet_05.png"
            />
          </WrapItem>
        </Wrap>
      </Container>
      <Divider
        borderWidth="1px"
        borderColor="black"
        maxW="100px"
        mx="auto"
        my="30px"
      />
      <Heading
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Container
        maxW="container.lg"
        mt="30px"
      >
        <Slider />
      </Container>
    </Box>
  )
}

export default Home
