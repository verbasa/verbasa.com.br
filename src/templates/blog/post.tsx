import React, { useMemo } from "react"
import PostTemplate from "./PostTemplate"
import { Container, DefaultLayout, Link, SEO, SVGIcon } from "../../components"
import { graphql } from "gatsby"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react"
import { FaChevronRight } from "react-icons/fa"

const MarketBox: React.FC = () => (
  <Container>
    <Box rounded="xl" bg="white" p={{ base: 4, md: 8, lg: 12 }}>
      <SVGIcon name="logo-verbasa" h={8} w="auto" mb={4} />
      <Heading as="p" fontSize="2xl" mb={4}>
        De profissionais para profissionais. A maior e mais desejada mesa
        proprietária do Brasil.
      </Heading>
      <Flex>
        <Button
          as={Link}
          href="/faq"
          variant="outline"
          colorScheme="brand"
          mr={8}
        >
          Saiba mais
        </Button>
        <Button
          as={Link}
          href="/entre-para-o-time"
          variant="solid"
          colorScheme="brand"
        >
          Entre para o time
        </Button>
      </Flex>
    </Box>
  </Container>
)

interface pageContextProps {
  categories: {
    data: {
      allMdx: {
        edges: Array<{
          node: {
            id: string
            frontmatter: {
              title: string
              slug: string
            }
          }
        }>
      }
    }
  }
}

interface PageProps {
  data: {
    categories: {
      edges: Array<{
        node: {
          frontmatter: {
            title: string
            slug: string
            bgImage: string
          }
        }
      }>
    }
    post: any
  }
  pageContext: pageContextProps
}

interface CategoryBySlugProps {
  [key: string]: {
    slug: string
    title: string
    bgImage: string
  }
}

const PagesLayout: React.FC<PageProps> = ({ data, pageContext }) => {
  const categoryBySlug = useMemo<CategoryBySlugProps>(() => {
    const initial = {}
    return data.categories.edges.reduce((obj, item) => {
      return {
        ...obj,
        [item.node.frontmatter.slug]: { ...item.node.frontmatter },
      }
    }, initial)
  }, [data])

  const category = categoryBySlug[data.post.frontmatter.category]

  const bgImage = data.post.frontmatter.bgImage || category.bgImage
  const templateData = {
    post: {
      ...data.post.frontmatter,
      body: data.post.body,
      bgImage,
      category,
    },
  }
  const { title, slug, metadata } = data.post.frontmatter
  return (
    <DefaultLayout>
      <SEO slug={slug} pageMetadata={{ title }} metadata={metadata} />
      <Box
        bgColor="gray.200"
        bgImg={`url(${bgImage})`}
        bgSize="100% 500px"
        bgPos="center top"
        bgRepeat="no-repeat"
      >
        <Container>
          <Breadcrumb
            spacing="8px"
            separator={<FaChevronRight color="gray.500" size={10} />}
            pt={20}
            mb={-8}
            color="white"
          >
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/blog">
                Blog
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={`/blog/category${category.slug}`}>
                {category.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>

        <PostTemplate data={{ ...templateData }} />
        <MarketBox />
      </Box>
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    categories: allMdx(
      filter: { frontmatter: { templateKey: { glob: "blog/category" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            bgImage
          }
        }
      }
    }
    post: mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        category
        author
        caption
        bgImage
        image
        metadata {
          title
          description
          dateModified
          datePublished
          relativeDateModified: dateModified(fromNow: true, locale: "pt")
          originalDatePublished: datePublished(
            formatString: "dddd, DD [de] MMMM, YYYY"
            locale: "pt"
          )
          lastUpdate: dateModified(
            formatString: "DD [de] MMMM, YYYY"
            locale: "pt"
          )
          image
        }
      }
    }
  }
`

export { pageQuery, PostTemplate }

export default PagesLayout
