import React from "react"
import { Container, DefaultLayout, FaqForm, Link, SEO } from "../../components"
import { graphql } from "gatsby"
import FaqCategoryCards from "./FaqCategryCards"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Text,
} from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

interface PageProps {
  data: any
  pageContext: {
    category: string
    id: string
  }
}

const PagesLayout: React.FC<PageProps> = ({ data }) => {
  const { title } = data.mdx.frontmatter
  const { edges } = data.allMdx
  return (
    <DefaultLayout>
      <SEO
        slug="/faq/category"
        pageMetadata={{ title: "Dúvidas Frequentes" }}
      />

      <Container>
        <Flex
          w={{ base: "100%", lg: "70%" }}
          mx="auto"
          direction="column"
          py={10}
        >
          <Breadcrumb
            spacing="8px"
            separator={<FaChevronRight color="gray.500" size={10} />}
            pb={10}
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/faq">
                Dúvidas
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="brand.500">
              <BreadcrumbLink as={"p"}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {edges.map((edge: any) => {
            const {
              datePublished,
              dateModified,
            } = edge.node.frontmatter.metadata
            return (
              <Link
                href={`/faq${edge.node.frontmatter.slug}`}
                key={edge.node.frontmatter.slug}
              >
                {edge.node.frontmatter.title}

                {datePublished !== dateModified && (
                  <Text as="span" fontSize="sm" color="aux.200" ml={4}>
                    (atualizado {dateModified})
                  </Text>
                )}
              </Link>
            )
          })}
        </Flex>
      </Container>
      <Box bg="aux.50">
        <FaqCategoryCards />
      </Box>
      <FaqForm />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($category: String, $id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___metadata___dateModified], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          body
          frontmatter {
            slug
            title
            metadata {
              title
              description
              dateModified(fromNow: true, locale: "pt")
              datePublished(fromNow: true, locale: "pt")
              image
            }
          }
        }
      }
    }
  }
`

export { pageQuery }

export default PagesLayout
