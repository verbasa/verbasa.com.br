import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../../components/mdx"

import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import { Container, Card, MDXBodyRender } from "../../../components/"

interface BlockDescriptionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
    text: string
    link: string
  }>
  body: string
  isPreview?: boolean
}

const BlockDescription: React.FC<BlockDescriptionProps> = ({
  cards,
  title,
  body,
  isPreview = false,
}) => {
  return (
    <Box py={10}>
      <Container>
        <Flex direction={{ base: "column", lg: "row" }} w="100%">
          <Box w={{ base: "100%", lg: "50%" }} pr={{ base: 0, lg: 8 }}>
            <Heading fontSize="3xl" fontWeight="700">
              {title}
            </Heading>
            <Divider
              borderColor="brand.500"
              borderBottomWidth="2px"
              w={20}
              pt={4}
              mb={4}
            />
            <MDXBodyRender body={body} isPreview={isPreview} />
          </Box>
          <Box w={{ base: "100%", lg: "50%" }}>
            <Flex wrap="wrap" justify="flex-end">
              {cards.map(card => (
                <Card
                  key={card.title}
                  {...card}
                  p={2}
                  w={{ base: "100%", lg: "50%" }}
                  flex="0 0 auto"
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

interface BlockMissionProps {
  text: string
  bgImage: string
}

const BlockMission: React.FC<BlockMissionProps> = ({ text, bgImage }) => {
  return (
    <Container>
      <Box
        bg={`url(${bgImage})`}
        bgPosition="top right"
        rounded="md"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box bg={{ base: "rgba(255, 255, 255, 0.618)", md: 0 }} p={10}>
          <Heading fontSize="2xl">Missão</Heading>
          <Divider
            borderColor="brand.500"
            borderBottomWidth="2px"
            mx={{ base: "auto", md: 0 }}
            w={20}
            pt={4}
            mb={4}
          />
          <Text w={{ base: "100%", lg: "61.8%" }}>{text}</Text>
        </Box>
      </Box>
    </Container>
  )
}

interface BlockVisionProps {
  text: string
  bgImage: string
}

const BlockVision: React.FC<BlockVisionProps> = ({ text, bgImage }) => {
  return (
    <Container>
      <Box
        bg={`url(${bgImage})`}
        bgPosition="top right"
        rounded="md"
        textAlign="center"
        color="white"
        p={10}
      >
        <Heading fontSize="2xl">Visão</Heading>
        <Divider
          borderColor="white"
          borderBottomWidth="2px"
          mx="auto"
          w={20}
          pt={4}
          mb={4}
        />
        <Text w={{ base: "100%", lg: "61.8%" }} mx="auto">
          {text}
        </Text>
      </Box>
    </Container>
  )
}

interface BlockValuesProps {
  cards: Array<{
    title: string
    icon: string
  }>
}

const BlockValues: React.FC<BlockValuesProps> = ({ cards }) => {
  return (
    <Container textAlign="center">
      <Heading fontSize="2xl">Valores</Heading>
      <Divider
        borderColor="brand.500"
        borderBottomWidth="2px"
        mx="auto"
        w={20}
        pt={4}
        mb={4}
      />

      <Flex
        wrap="wrap"
        justify="center"
        w={{ base: "100%", lg: "70%" }}
        mx="auto"
      >
        {cards.map(card => (
          <Card
            key={card.title}
            {...card}
            p={2}
            w={{ base: "50%", md: "30%" }}
            flex="0 0 auto"
            h="auto"
          />
        ))}
      </Flex>
    </Container>
  )
}

interface TemplateProps {
  data: {
    title: string
    cards: Array<{
      title: string
      icon: string
      text: string
      link: string
    }>
    body: string
    isPreview?: boolean
    mission: BlockMissionProps
    vision: BlockVisionProps
    values: BlockValuesProps
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockDescription {...data} />
      <BlockMission {...data.mission} />
      <BlockVision {...data.vision} />
      <BlockValues {...data.values} />
    </MDXProvider>
  )
}

export default Template
