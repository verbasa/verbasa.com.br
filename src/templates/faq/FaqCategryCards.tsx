import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Container } from "../../components"
import CategoryTemplate from "./CategoryTemplate"
import { Box, chakra, Flex } from "@chakra-ui/react"

interface QueryDataProps {
  allMdx: {
    edges: Array<{
      node: {
        id: string
        frontmatter: {
          title: string
          text: string
          slug: string
          icon: string
        }
      }
    }>
  }
}

const FaqCategoryCards: React.FC = () => {
  return (
    <StaticQuery
      query={query}
      render={({ allMdx: { edges } }: QueryDataProps) => {
        return (
          <Container>
            <Flex
              direction={{ base: "column", lg: "row" }}
              w={{ base: "90%", lg: "70%" }}
              mx="auto"
              wrap="wrap"
            >
              {edges.map(edge => {
                const card = edge.node.frontmatter
                return (
                  <Box key={edge.node.id} w={{ base: "100%", lg: "50%" }} p={4}>
                    <CategoryTemplate {...card} h="100%" />
                  </Box>
                )
              })}
            </Flex>
          </Container>
        )
      }}
    />
  )
}

const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { templateKey: { glob: "faq/category" } } }
      sort: { order: ASC, fields: frontmatter___metadata___dateModified }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            icon
            text
          }
        }
      }
    }
  }
`

export default chakra(FaqCategoryCards)
