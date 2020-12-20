const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const cmsPages = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "pages/*" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for cmsPages')
  }

  cmsPages.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: slug,
      component: templateKey
        ? path.resolve(`./src/templates/${templateKey}/index.tsx`)
        : path.resolve(`./src/templates/default.tsx`),
      context: { id: node.id },
    })
  })

  const cmsFaqCategories = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { templateKey: { glob: "faq/category" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              title
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsFaqCategories.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsFaqCategories'
    )
  }

  cmsFaqCategories.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/faq/category${slug}`,
      component: path.resolve(`./src/templates/${templateKey}.tsx`),
      context: { category: slug, id: node.id },
    })
  })

  const cmsFaqPosts = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "faq/post" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsFaqPosts.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsFaqPosts'
    )
  }

  cmsFaqPosts.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/faq${slug}`,
      component: path.resolve(`./src/templates/${templateKey}.tsx`),
      context: { categories: cmsFaqCategories, id: node.id },
    })
  })

  const cmsAuthors = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "authors/*" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsAuthors.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsAuthors'
    )
  }

  cmsAuthors.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/authors/${slug}`,
      component: templateKey
        ? path.resolve(`./src/templates/${templateKey}.tsx`)
        : path.resolve(`./src/templates/default.tsx`),
      context: { id: node.id },
    })
  })

  const cmsBlogCategories = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { templateKey: { glob: "blog/category" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              title
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsBlogCategories.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsBlogCategories'
    )
  }

  cmsBlogCategories.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/blog/category${slug}`,
      component: path.resolve(`./src/templates/${templateKey}.tsx`),
      context: { category: slug, id: node.id },
    })
  })

  const cmsBlogPosts = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "blog/post" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsBlogPosts.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsBlogPosts'
    )
  }

  cmsBlogPosts.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/blog${slug}`,
      component: path.resolve(`./src/templates/${templateKey}.tsx`),
      context: { categories: cmsBlogCategories, id: node.id },
    })
  })
}
