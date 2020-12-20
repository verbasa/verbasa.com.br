import React, { useMemo } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const removeEmpty = (obj: { [key: string]: any }) => {
  Object.keys(obj).forEach(
    k => !obj[k] && obj[k] !== undefined && delete obj[k]
  )
  return obj
}

interface SEOProps {
  slug?: string
  pageMetadata?: {
    [key: string]: string
  }
  metadata?: {
    [key: string]: string
  }
  extraMetaTags?: any
  structuredData?: any
}

const SEO: React.FC<SEOProps> = ({
  slug,
  pageMetadata,
  metadata,
  extraMetaTags = null,
  structuredData,
}) => {
  const pageData = useMemo(() => {
    return !!pageMetadata ? removeEmpty(pageMetadata) : {}
  }, [pageMetadata])
  const seoData = useMemo(() => {
    return !!metadata ? removeEmpty(metadata) : {}
  }, [metadata])

  return (
    <StaticQuery
      query={seoQuery}
      render={data => {
        const { siteMetadata } = data.site
        const siteData = useMemo(() => {
          return !!siteMetadata ? removeEmpty(siteMetadata) : {}
        }, [data])

        const seo: { [key: string]: any } = {
          image: siteMetadata.thumbnail,
          ...siteData,
          ...pageData,
          ...seoData,
        }
        // console.log(seo)
        return (
          <Helmet
            htmlAttributes={{ lang: seo.lang }}
            title={seo.title}
            meta={extraMetaTags}
          >
            {structuredData && (
              <script type="application/ld+json">{structuredData}</script>
            )}

            <meta name="description" content={seo.description} />

            <meta name="twitter:site" content={seo.publisher} />

            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content={seo.themeColor} />
            <meta name="msapplication-TileColor" content={seo.themeColor} />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="google" content="notranslate" />

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:locale" content={seo.lang} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${seo.siteUrl}${slug}`} />
            <meta property="og:site_name" content={seo.title} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:image:secure_url" content={seo.image} />
            <meta property="og:image:alt" content="Thumbnail" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="620" />

            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={seo.publisher} />
            <meta name="twitter:creator" content={seo.author} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:image:src" content={seo.image} />
            <meta name="twitter:image:alt" content="Thumbnail" />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="620" />

            {seo.fbAdmins && (
              <meta property="fb:admins" content={seo.fbAdmins} />
            )}
          </Helmet>
        )
      }}
    />
  )
}

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        lang
        thumbnail
        publisher
        siteUrl
        author
        manifest {
          themeColor
        }
      }
    }
  }
`

export default SEO
