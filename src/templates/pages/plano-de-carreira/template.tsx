import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../../components/mdx"

import { Box, Divider, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import {
  Link,
  SVGIcon,
  Container,
  Card,
  MDXBodyRender,
} from "../../../components/"

interface BlockBodyProps {
  title: string
  body: string
  isPreview?: boolean
}

const BlockBody: React.FC<BlockBodyProps> = ({
  title,
  body,
  isPreview = false,
}) => {
  return (
    <Box pt={10}>
      <Container>
        <MDXBodyRender body={body} isPreview={isPreview} />
        <Heading
          as="h1"
          textAlign="center"
          fontSize="3xl"
          pt={10}
          mb={4}
          pb={2}
          fontWeight="700"
          position="relative"
          _after={{
            content: '" "',
            w: "12rem",
            borderBottom: "2px",
            borderColor: "brand.500",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {title}
        </Heading>
      </Container>
    </Box>
  )
}

interface LevelProps {
  title: string
  color: string
  icon: string
  infos: Array<{
    key?: string
    value?: string
  }>
}

interface BlockLevelProps {
  levels: LevelProps[]
}

const BlockLevel: React.FC<BlockLevelProps> = ({ levels }) => {
  return (
    <Box pb={10}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {levels.map(level => (
            <Flex
              direction="column"
              border="2px solid"
              borderColor={level.color}
              p={8}
            >
              <SVGIcon name={level.icon} w="auto" h={12} />
              <Heading as="h3" fontSize="2xl" py={4} textAlign="center">
                {level.title}
              </Heading>
              {level.infos.map(info => (
                <Text mb={2}>
                  {!!info.key && (
                    <Text as="b" mr={2}>
                      {info.key}
                    </Text>
                  )}
                  {!!info.value && <Text as="span">{info.value}</Text>}
                </Text>
              ))}
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

interface TemplateProps {
  data: {
    title: string
    body: string
    isPreview?: boolean
    levels: LevelProps[]
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      <BlockBody {...data} />
      <BlockLevel levels={data.levels} />
    </MDXProvider>
  )
}

export default Template
