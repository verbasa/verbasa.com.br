import React, { useMemo } from "react"
import { graphql } from "gatsby"
import { Container, DefaultLayout, SEO } from "../../components"
import { SimpleGrid } from "@chakra-ui/react"
import BlogCard from "../../templates/blog/BlogCard"

interface CategoryBySlugProps {
  [key: string]: {
    title: string
    bgImage: string
  }
}

interface BlogQueryProps {
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

    posts: {
      edges: Array<{
        node: {
          body: string
          frontmatter: {
            title: string
            slug: string
            category: string
            author: string
            caption: string
            bgImage: string
            image: string
            metadata: {
              title: string
              description: string
              dateModified: Date
              datePublished: Date
              lastUpdate: string
              image: string
            }
          }
        }
      }>
    }
  }
}

const BlogIndex: React.FC<BlogQueryProps> = ({ data }) => {
  const categoryBySlug = useMemo<CategoryBySlugProps>(() => {
    const initial = {}
    return data.categories.edges.reduce((obj, item) => {
      return {
        ...obj,
        [item.node.frontmatter.slug]: {
          title: item.node.frontmatter.title,
          bgImage: item.node.frontmatter.bgImage,
        },
      }
    }, initial)
  }, [data])

  const { edges } = data.posts

  return (
    <DefaultLayout>
      <SEO slug="/blog" pageMetadata={{ title: "Nosso Blog" }} />
      <Container>
        <SimpleGrid
          columns={{
            base: 1,
            md: Math.min(2, edges.length),
            lg: Math.min(3, edges.length),
          }}
          spacing={4}
        >
          {edges.map(
            ({
              node: {
                frontmatter: {
                  title,
                  slug,
                  image,
                  bgImage,
                  caption,
                  category,
                  metadata: { lastUpdate },
                },
              },
            }) => (
              <BlogCard
                key={slug}
                slug={slug}
                title={title}
                image={image}
                bgImage={bgImage ? bgImage : categoryBySlug[category].bgImage}
                caption={!caption && !image ? title : caption}
                category={categoryBySlug[category].title}
                lastUpdate={lastUpdate}
              />
            )
          )}
        </SimpleGrid>
      </Container>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query($category: String) {
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
    posts: allMdx(
      filter: {
        frontmatter: {
          templateKey: { glob: "blog/post" }
          category: { eq: $category }
        }
      }
      sort: { order: ASC, fields: frontmatter___metadata___dateModified }
    ) {
      edges {
        node {
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
              lastUpdate: dateModified(
                formatString: "DD [de] MMMM, YYYY"
                locale: "pt"
              )
              image
            }
          }
        }
      }
    }
  }
`
export default BlogIndex
