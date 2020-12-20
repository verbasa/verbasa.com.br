import React from "react"
import { MDXProvider } from "@mdx-js/react"
import components from "../../components/mdx"

import { Button, Heading, Icon, Text } from "@chakra-ui/react"
import { MDXBodyRender } from "../../components/"
import { FiArrowLeft } from "react-icons/fi"
import { navigate } from "gatsby"

interface BlockPostProps {
  title: string
  category: { slug: string; title: string }
  metadata: {
    dateModified: Date
    datePublished: Date
    relativeDateModified: string
    originalDatePublished: string
  }
  body: string
  isPreview: boolean
}

const BlockPost: React.FC<BlockPostProps> = ({
  title,
  metadata: {
    datePublished,
    dateModified,
    originalDatePublished,
    relativeDateModified,
  },
  body,
  isPreview = false,
}) => {
  return (
    <>
      <Heading color="brand.500" fontSize="2xl" mb={2}>
        {title}
      </Heading>
      <Text color="aux.200" mb={6}>
        {datePublished === dateModified
          ? `${originalDatePublished}`
          : `Atualizado ${relativeDateModified}`}
      </Text>
      <MDXBodyRender body={body} isPreview={isPreview} />
    </>
  )
}

interface TemplateProps {
  data: {
    post: BlockPostProps
  }
}

const PostTemplate: React.FC<TemplateProps> = ({ data }) => {
  return (
    <MDXProvider components={components}>
      {/* <div>{JSON.stringify(data)}</div> */}
      <BlockPost {...data.post} />
    </MDXProvider>
  )
}

export default PostTemplate
