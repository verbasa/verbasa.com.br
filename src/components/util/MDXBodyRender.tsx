import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MDXRuntimeProvider from "mdx-scoped-runtime"
import mdxComponents from "../../components/mdx"

const components = {
  ...mdxComponents,
}

const scope = {
  ...mdxComponents,
}

interface MDXBodyRenderProps {
  body: string
  isPreview?: boolean
}

const MDXBodyRender: React.FC<MDXBodyRenderProps> = ({
  body,
  isPreview = false,
}) => {
  return (
    <>
      {isPreview ? (
        <MDXRuntimeProvider components={components} scope={scope}>
          {body}
        </MDXRuntimeProvider>
      ) : (
        <MDXRenderer>{body}</MDXRenderer>
      )}
    </>
  )
}

export default MDXBodyRender
