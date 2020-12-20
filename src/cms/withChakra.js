import React from "react"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import weakMemoize from "@emotion/weak-memoize"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../@chakra-ui/gatsby-plugin/theme"

const memoizedCreateCacheWithContainer = weakMemoize(container => {
  let newCache = createCache({ key: "emotion-on-netlify-cms", container })
  return newCache
})

export default Component => props => {
  const iframe = document.querySelector("#nc-root iframe")
  const iframeHeadElem = iframe && iframe.contentDocument.head

  if (!iframeHeadElem) {
    return null
  }

  return (
    <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
      <ChakraProvider theme={theme}>
        <Component {...props} />
      </ChakraProvider>
    </CacheProvider>
  )
}
