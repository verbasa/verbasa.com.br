import React from "react"
import Template from "./template"
import {
  DefaultLayout,
  NewsletterForm,
  SEO,
} from "../../../components"
import { graphql } from "gatsby"

interface QueryDataToAny {
  data: any
}

const PagesLayout: React.FC<QueryDataToAny> = ({ data }) => {
  const { body } = data.mdx
  const {
    hero,
    callToAction,
    description,
    slug,
    title,
    metadata,
  } = data.mdx.frontmatter
  const { siteMetadata } = data.site
  const { info, social } = siteMetadata
  const structuredDataOrganization = JSON.stringify({
    "@context": "http://schema.org",
    "@type": "Organization",
    legalName: info.localID.legalName,
    url: siteMetadata.siteUrl,
    logo: siteMetadata.logo,
    foundingDate: info.localID.foundingDate,
    founders: info.localID.founders
      ? info.localID.founders.map((founder: any) => ({
          "@type": "Person",
          name: founder,
        }))
      : [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: info.email.address,
        telephone: info.phone.number,
        contactType: "customer service",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: info.address.locality,
      addressRegion: info.address.region,
      addressCountry: info.address.country,
      postalCode: info.address.postalCode,
    },
    sameAs: social.networks.map((network: any) => network.url),
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
          hero,
          callToAction,
          description: {
            body,
            ...description,
          },
        }}
      />
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
        slug
        title
        hero {
          title
          headline
          buttons {
            colorScheme
            variant
            label
            link
          }
          bgImage
        }
        callToAction {
          title
          cards {
            title
            icon
          }
          buttons {
            colorScheme
            variant
            label
          }
        }
        description {
          title
          cards {
            title
            text
            link
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
