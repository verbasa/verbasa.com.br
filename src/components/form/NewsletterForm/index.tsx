import React from "react"
import { Box, Divider, Flex, Heading, Image } from "@chakra-ui/react"
import { Container, MDXBodyRender } from "../.."
import { graphql, StaticQuery } from "gatsby"
import FormComponent from "./FormComponent"

export interface TemplateProps {
  data: {
    title: string
    image: string
    body: string
    isPreview?: boolean
  }
}

export const Template: React.FC<TemplateProps> = ({
  data: { title, image, body, isPreview = false },
}) => {
  return (
    <Box bg="brand.500" color="white" py={10} mt={{ base: 0, md: "10%" }}>
      <Container>
        <Flex w="100%" wrap="wrap">
          <Box w={{ base: "100%", md: "50%" }}>
            <Heading fontSize="2xl">{title}</Heading>
            <Divider borderBottom="2px solid white" w={20} my={4} />
            <MDXBodyRender body={body} isPreview={isPreview} />
            <Box mt={6}>
              <FormComponent />
            </Box>
          </Box>
          <Box w="50%" display={{ base: "none", md: "block" }}>
            <Image
              src={`${image}`}
              height="auto"
              width="70%"
              shadow="2xl"
              rounded="md"
              m="-40% auto"
            />
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
      image: string
    }
  }
}

const NewsletterForm: React.FC = () => {
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
    mdx(frontmatter: { componentKey: { eq: "newsletter" } }) {
      body
      frontmatter {
        title
        image
      }
    }
  }
`

export default NewsletterForm
