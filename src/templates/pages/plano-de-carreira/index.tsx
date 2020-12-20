import React from "react"
import Template from "./template"
import { DefaultLayout, SEO } from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  const { title, slug, metadata } = data.mdx.frontmatter
  return (
    <DefaultLayout>
      <SEO slug={slug} pageMetadata={{ title }} metadata={metadata} />
      <Template
        data={{
          ...data.mdx.frontmatter,
          body,
        }}
      />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        levels {
          title
          icon
          color
          infos {
            key
            value
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
