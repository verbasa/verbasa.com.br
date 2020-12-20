import React from "react"
import Template from "./template"
import { DefaultLayout, SEO } from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { title, slug, metadata } = data.mdx.frontmatter
  return (
    <DefaultLayout>
      <SEO slug={slug} pageMetadata={{ title }} metadata={metadata} />
      <Template
        data={{
          ...data.mdx.frontmatter,
        }}
      />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        hero {
          title
          bgImage
          video
        }
        plans {
          label
          labelPrefix
          price
          infoList {
            key
            value
          }
          buttons {
            label
            colorScheme
            variant
            link
          }
        }
        metadata {
          title
          description
          dateModified
          datePublished
          image
        }
      }
    }
  }
`

export { pageQuery, Template }

export default PagesLayout
