import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { chakra, Link as ChakraLink } from "@chakra-ui/react"
import { OutboundLink } from "gatsby-plugin-gtag"

const Link = ({ children, href, ...rest }) => {
  const internal = /^\/(?!\/)/.test(href)

  if (internal) {
    if (href === "/_admin") {
      return (
        <ChakraLink href={href} {...rest} display="block">
          {children}
        </ChakraLink>
      )
    }
    return (
      <ChakraLink as={GatsbyLink} to={href} {...rest} display="block">
        {children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink
      as={OutboundLink}
      href={href}
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      display="block"
    >
      {children}
    </ChakraLink>
  )
}

export default chakra(Link)
