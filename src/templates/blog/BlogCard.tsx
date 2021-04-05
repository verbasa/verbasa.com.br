import React from "react"
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { Link } from "../../components"

interface BlogCardThumbProps {
  bgImage: string
  title: string
  caption?: string
  image?: string
}

export const BlogCardThumb: React.FC<BlogCardThumbProps> = ({
  bgImage,
  title,
  caption,
  image,
}) => {
  const thumbCaption = !image ? caption || title : caption
  return (
    <Flex
      bg={`url(${bgImage}) center center no-repeat`}
      bgSize="cover"
      h={60}
      justify="center"
      align="center"
      color="rgba(255,255,255)"
      p={8}
      rounded="lg"
      position="relative"
    >
      {!!thumbCaption && !image && (
        <Heading textAlign="center">{thumbCaption}</Heading>
      )}
      {!!image && (
        <Flex
          bgImage={`url(${image})`}
          bgRepeat="no-repeat"
          bgSize="100% auto"
          bgPosition="center"
          h="100%"
          w="100%"
          rounded="lg"
          overflow="hidden"
          justify="center"
          align="center"
        >
          {!!caption && <Heading textAlign="center">{caption}</Heading>}
        </Flex>
      )}
    </Flex>
  )
}

interface BlogCardProps {
  slug?: string
  title: string
  image: string
  bgImage: string
  caption: string
  category: string
  lastUpdate: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  image,
  bgImage,
  caption,
  category,
  lastUpdate,
}) => {
  return (
    <Box
      as={Link}
      href={`/blog${slug}`}
      rounded="md"
      shadow="md"
      overflow="hidden"
      _hover={{
        shadow: "2xl",
        textDecoration: "none",
      }}
    >
      <BlogCardThumb
        bgImage={bgImage}
        title={title}
        caption={caption}
        image={image}
      />
      <Box>
        <Flex justify="space-between" p={4}>
          <Text
            as="span"
            color="brand.300"
            textTransform="uppercase"
            fontWeight="700"
          >
            {category}
          </Text>
          <Text as="span" fontSize="sm" color="aux.200">
            {lastUpdate}
          </Text>
        </Flex>
        <Heading as="h2" fontSize="2xl" p={4} pt={0} fontWeight="700">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default BlogCard
