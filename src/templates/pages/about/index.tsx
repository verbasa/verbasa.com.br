import React from "react"
import Template from "./template"
import { DefaultLayout, NewsletterForm, SEO } from "../../../components"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/react"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  const { title, slug, metadata } = data.mdx.frontmatter
  const { siteMetadata } = data.site
  const structuredDataOrganization = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    legalName: siteMetadata.info.localID.legalName,
    url: siteMetadata.siteUrl,
    logo: siteMetadata.logo,
    foundingDate: siteMetadata.info.localID.foundingDate,
    founders: siteMetadata.info.localID.founders
      ? siteMetadata.info.localID.founders.map((founder: string) => ({
          "@type": "Person",
          name: founder,
        }))
      : [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteMetadata.info.email.address,
        telephone: siteMetadata.info.phone.number,
        contactType: "customer service",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteMetadata.info.address.locality,
      addressRegion: siteMetadata.info.address.region,
      addressCountry: siteMetadata.info.address.country,
      postalCode: siteMetadata.info.address.postalCode,
    },
    sameAs: siteMetadata.social.networks.map((network: any) => network.link),
  })
  return (
    <DefaultLayout>
      <SEO
        slug={slug}
        pageMetadata={{ title }}
        metadata={metadata}
        structuredData={structuredDataOrganization}
      />
      <Template
        data={{
          ...data.mdx.frontmatter,
          body,
        }}
      />
      <Box pb={10} />
      <NewsletterForm />
    </DefaultLayout>
  )
}

const pageQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        siteUrl
        logo
        info {
          email {
            address
            subject
          }
          address {
            display
            locality
          }
          phone {
            number
            display
            message
          }
          localID {
            legalName
            foundingDate
          }
        }
        social {
          networks {
            name
            url
          }
        }
      }
    }

    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        cards {
          title
          text
          link
          icon
        }
        mission {
          bgImage
          text
        }
        vision {
          bgImage
          text
        }
        values {
          cards {
            title
            icon
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
