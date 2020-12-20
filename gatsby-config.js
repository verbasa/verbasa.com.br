const path = require("path")
const siteMetadata = require("./content/settings/siteMetadata.json")
const googleFonts = require("./content/settings/googleFonts.json")
const info = require("./content/settings/info.json")
const social = require("./content/settings/social.json")
const manifest = require("./content/settings/manifest.json")
const publicKeys = require("./content/settings/publicKeys.json")

let plugins = [
  `gatsby-plugin-netlify`,
  {
    resolve: "gatsby-source-filesystem",
    options: {
      path: path.join(__dirname, `static`),
      name: "uploads",
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `cms`,
      path: path.join(__dirname, `content`),
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: path.join(__dirname, `src`, `pages`),
    },
  },
  {
    resolve: "gatsby-plugin-canonical-urls",
    options: {
      siteUrl: siteMetadata.siteUrl,
      stripQueryString: true,
    },
  },
  `gatsby-plugin-typescript`,
  `@chakra-ui/gatsby-plugin`,

  {
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [".mdx", ".md"],
      defaultLayouts: {
        default: require.resolve("./src/templates/default.tsx"),
      },
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      google: {
        families: googleFonts.fonts.map(
          font => `${font.family}:${font.variants}`
        ),
      },
      timeout: 2000,
    },
  },
]

if (!!manifest) {
  plugins.push("gatsby-plugin-react-helmet", {
    resolve: "gatsby-plugin-manifest",
    options: {
      ...manifest,
      display: "standalone",
      icon: path.join(__dirname, `static`, manifest.icon),
    },
  })
}

if (process.env.NODE === "production") {
  plugins.push({
    resolve: `gatsby-plugin-sitemap`,
    options: {
      exclude: [`/*/obrigado`],
    },
  })
  if (!!publicKeys.gtag) {
    plugins.push({
      resolve: "gatsby-plugin-gtag",
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: analytics.trackingId,
        // Setting this parameter is optional
        anonymize: false,
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
      },
    })
  }
  if (!!publicKeys.tawkTo) {
    plugins.push({
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: publicKeys.tawkTo,
      },
    })
  }
}

plugins.push(
  //CMS
  {
    resolve: `gatsby-plugin-netlify-cms`,
    options: {
      manualInit: true,
      modulePath: path.join(__dirname, `src`, `cms`, `index.js`),
      // stylesPath: path.join(__dirname, `src`, `cms`, `admin.css`),
      // enableIdentityWidget: true, // Netlify identity
      publicPath: `_admin`,
      htmlTitle: `${siteMetadata.title} CMS Panel`,
      // htmlFavicon: `/icons/64x64.png`,
    },
  }
)

module.exports = {
  siteMetadata: {
    ...siteMetadata,
    manifest,
    info,
    social,
  },
  plugins,
}
