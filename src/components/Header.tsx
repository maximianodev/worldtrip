import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Flex, Icon, Img } from '@chakra-ui/react'
import { FiChevronLeft } from "react-icons/fi";

const Header = () => {
  const router = useRouter()

  return (
    <Container
      position="relative"
      maxW='container.lg'
    >
      <Flex
        py={["15px"]}
        justify="center"
        align="center"
      >
        {router.asPath !== '/' &&
          <Link href="/">
            <a>
              <Icon
                as={FiChevronLeft}
                position="absolute"
                left="15px"
                top={["23px"]}
                zIndex="10"
              />
            </a>
          </Link>}
        <Link href="/">
          <a>
            <Img
              src="/images/logo.svg"
              alt="logo"
              width={["80px", "110px", "180px"]}
            />
          </a>
        </Link>
      </Flex>
    </Container >
  )
}

export default Header