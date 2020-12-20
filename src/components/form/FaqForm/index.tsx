import React from "react"
import { Box, Divider, Flex, Heading } from "@chakra-ui/react"
import { Container, MDXBodyRender } from "../.."
import { graphql, StaticQuery } from "gatsby"
import FormComponent from "./FormComponent"

export interface TemplateProps {
  data: {
    title: string
    body: string
    isPreview?: boolean
  }
}

export const Template: React.FC<TemplateProps> = ({
  data: { title, body, isPreview = false },
}) => {
  return (
    <Box bg="brand.500" color="white" py={10}>
      <Container>
        <Flex w="100%" wrap="wrap">
          <Flex
            w={{ base: "100%", md: "50%" }}
            direction="column"
            justify="center"
          >
            <Heading fontSize="2xl">{title}</Heading>
            <Divider borderBottom="2px solid white" w={20} my={4} />
            <MDXBodyRender body={body} isPreview={isPreview} />
          </Flex>
          <Box w={{ base: "100%", md: "50%" }} mt={{ base: 8, md: 0 }}>
            <FormComponent />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

interface QueryProps {
  mdx: {
    body: string
    frontmatter: {
      title: string
    }
  }
}

const FaqForm: React.FC = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: QueryProps) => {
        const templateData = { ...data.mdx.frontmatter, body: data.mdx.body }
        return <Template data={templateData} />
      }}
    />
  )
}

const query = graphql`
  query {
    mdx(frontmatter: { componentKey: { eq: "faqForm" } }) {
      body
      frontmatter {
        title
      }
    }
  }
`

export default FaqForm
