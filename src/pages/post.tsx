import { Box, Container, Flex, Heading, Img, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const Post = () => {
  return (
    <div>
      <Img
        src="https://images.unsplash.com/photo-1621848064631-56c4e44c2337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        w="100%"
      />
      <Container maxW="container.lg" my="10">
        <Wrap>
          <WrapItem w={["100%", "100%", "50%"]}>
            <Text>
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
          </WrapItem>

          <WrapItem flex={1} d="flex" justifyContent="space-evenly">
            <Text fontWeight="bold">
              <Text fontSize="36px" color="#FFBA08" align="center">50</Text>
              países
            </Text>

            <Text fontWeight="bold" ml="5">
              <Text fontSize="36px" color="#FFBA08" align="center" >60</Text>
              línguas
            </Text>
            <Text fontWeight="bold" ml="5">
              <Text fontSize="36px" color="#FFBA08" align="center" >27</Text>
              cidades +100
            </Text>
          </WrapItem>
        </Wrap>

        <Heading my="5">
          Cidades +100
        </Heading>

        <Wrap spacing="5" justify={["center", "center", "flex-start",]}>
          <WrapItem w={["100%", "50%", "auto"]} d="block" border="1px solid #FFBA0880" borderRadius="md" overflow="hidden">
            <Img
              src="https://images.unsplash.com/photo-1621848064631-56c4e44c2337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGV1cm9wZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
              w={["100%", "100%", "180px"]}
              alt=""
            />

            <Flex px="3" py="4" align="center" justify="space-between">
              <Box>
                <Text fontWeight="bold">Londres</Text>
                <Text fontSize="small">Reino Unido</Text>
              </Box>
              <Img src="/images/bandeira.svg" />
            </Flex>
          </WrapItem>
          <WrapItem w={["100%", "50%", "auto"]} d="block" border="1px solid #FFBA0880" borderRadius="md" overflow="hidden">
            <Img
              src="https://images.unsplash.com/photo-1621848064631-56c4e44c2337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGV1cm9wZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
              w={["100%", "100%", "180px"]}
              alt=""
            />

            <Flex px="3" py="4" align="center" justify="space-between">
              <Box>
                <Text fontWeight="bold">Londres</Text>
                <Text fontSize="small">Reino Unido</Text>
              </Box>
              <Img src="/images/bandeira.svg" />
            </Flex>
          </WrapItem>
          <WrapItem w={["100%", "50%", "auto"]} d="block" border="1px solid #FFBA0880" borderRadius="md" overflow="hidden">
            <Img
              src="https://images.unsplash.com/photo-1621848064631-56c4e44c2337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGV1cm9wZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
              w={["100%", "100%", "180px"]}
              alt=""
            />

            <Flex px="3" py="4" align="center" justify="space-between">
              <Box>
                <Text fontWeight="bold">Londres</Text>
                <Text fontSize="small">Reino Unido</Text>
              </Box>
              <Img src="/images/bandeira.svg" />
            </Flex>
          </WrapItem>
        </Wrap>
      </Container>
    </div>
  )
}
export default Post