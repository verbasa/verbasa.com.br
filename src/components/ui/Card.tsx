import { Box, chakra, Flex, Heading, Text } from "@chakra-ui/react"
import React from "react"
import { Link, SVGIcon } from ".."

interface CardProps {
  title: string
  text?: string
  link?: string
  icon: string
  href?: string
}

const Content: React.FC<CardProps> = ({ title, text, icon }) => (
  <Flex
    direction="column"
    // justify="space-between"
    align="center"
    p={8}
    shadow="lg"
    h="100%"
    rounded="md"
    transition="all ease 0.3s"
    _hover={{
      shadow: "dark-lg",
    }}
  >
    <SVGIcon name={icon} w="auto" h={16} pb={4} />
    <Heading fontSize="base" pb={4} align="center">
      {title}
    </Heading>
    <Text align="center">{text}</Text>
  </Flex>
)

const Card: React.FC<CardProps> = ({ title, text, link, icon, ...rest }) => {
  return (
    <>
      {link ? (
        <Link href={link} {...rest}>
          <Content title={title} text={text} icon={icon} />
        </Link>
      ) : (
        <Box h="100%" {...rest}>
          <Content title={title} text={text} icon={icon} />
        </Box>
      )}
    </>
  )
}

export default chakra(Card)
