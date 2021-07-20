import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../../components/mdx"

import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import {
  Link,
  SVGIcon,
  Container,
  Card,
  MDXBodyRender,
} from "../../../components/"

interface ButtonScheme {
  colorScheme: string
  variant: string
  label: string
  link: string
}

interface BlockHeroProps {
  title: string
  headline: string
  buttons: ButtonScheme[]
  bgImage: string
}

const BlockHero: React.FC<BlockHeroProps> = ({
  title,
  headline,
  buttons,
  bgImage,
}) => {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Center bg="rgba(30,30,30,0.7)" h="600px">
        <Flex py={20} color="white" direction="column" align="center">
          <Heading>{title}</Heading>
          <Text pt={8} pb={12}>
            {headline}
          </Text>
          <Center>
            <ButtonGroup>
              {buttons.map(button => (
                <Button
                  key={button.label}
                  as={Link}
                  colorScheme={button.colorScheme}
                  variant={button.variant}
                  p={6}
                  href={button.link}
                >
                  {button.label}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
        </Flex>
      </Center>
    </Box>
  )
}

interface BlockCallToActionProps {
  title: string
  cards: Array<{
    title: string
    icon: string
  }>
  buttons: ButtonScheme[]
}

const BlockCallToAction: React.FC<BlockCallToActionProps> = ({
  title,
  cards,
  buttons,
}) => {
  return (
    <Box as="section" bg="aux.50">
      <Center py={20}>
        <VStack>
          <Heading as="p">{title}</Heading>
          <HStack pt="10" spacing={8}>
            {cards.map(card => (
              <Center direction="row" key={card.title}>
                <VStack>
                  <SVGIcon name={card.icon} w="auto" h={{ base: 24, lg: 32 }} />
                  <Text as="h1" fontSize={{ lg: "xl" }} fontWeight="900">
                    {card.title}
                  </Text>
                </VStack>
              </Center>
            ))}
          </HStack>
          <ButtonGroup pt={10}>
            {buttons.map(button => (
              <Button
                key={button.label}
                as={Link}
                colorScheme={button.colorScheme}
                variant={button.variant}
                p={6}
                // href={button.link}
                href="/entre-para-o-time"
              >
                {button.label}
              </Button>
            ))}
          </ButtonGroup>
        </VStack>
      </Center>
    </Box>
  )
}

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
  body,
  cards,
  title,
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

interface TemplateProps {
  data: {
    hero: BlockHeroProps
    callToAction: BlockCallToActionProps
    description: BlockDescriptionProps
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockHero {...data.hero} />
      <BlockCallToAction {...data.callToAction} />
      <BlockDescription {...data.description} />
    </MDXProvider>
  )
}

export default Template
