import {
  Box,
  Flex,
  Text,
  Heading,
  List,
  ListIcon,
  HStack,
  Divider,
  Stack,
  ListItem,
} from "@chakra-ui/react"
import { graphql, StaticQuery } from "gatsby"
import React, { useMemo } from "react"
import Container from "../Container"
import Link from "../../mdx/Link"
import SVGIcon from "../SVGIcon"
import { FaChevronRight } from "react-icons/fa"
import { MDXBodyRender } from "../.."

interface TemplateProps {
  data: {
    logo: string
    linksLists: Array<{
      title: string
      linksList: Array<{
        label: string
        link: string
      }>
    }>
    info?: any
    body: string
    isPreview?: boolean
    BodyPreview?: React.FC<{ body: string }>
  }
}

export const Template: React.FC<TemplateProps> = ({
  data: { logo, linksLists, info, body, isPreview = false },
}) => {
  const copyYears = useMemo(() => {
    const registerYear = 2020
    const thisYear = new Date().getFullYear()
    return thisYear === registerYear
      ? registerYear
      : `${registerYear} - ${thisYear}`
  }, [])

  return (
    <Box as="footer" pt={10}>
      <Container>
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex
            w={{ base: "100%", md: "33%", lg: "40%" }}
            direction="column"
            align={{ base: "center", md: "start" }}
          >
            <Link href="/" pb={6}>
              <SVGIcon name={logo} h={10} w="auto" mr={{ md: 4 }} />
            </Link>
            <Box display={{ base: "none", md: "block" }}>
              <MDXBodyRender body={body} isPreview={isPreview} />
            </Box>
          </Flex>
          <HStack w={{ base: "100%", md: "40%" }} align="start">
            {linksLists.map(({ title, linksList }) => (
              <Box key={title} w="50%">
                <Heading as="h4" color="aux.400" fontSize="xl" mb={4}>
                  {title}
                </Heading>
                <List>
                  {linksList.map(link => (
                    <ListItem key={link.label} mb={2}>
                      <Link href={link.link} display="flex" alignItems="center">
                        <ListIcon
                          as={FaChevronRight}
                          color="aux.200"
                          h="10px"
                        />
                        {link.label}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </HStack>
          <Box w={{ base: "100%", md: "25%", lg: "20%" }}>
            <Heading as="h4" color="aux.400" fontSize="xl" mb={4}>
              Nosso contato
            </Heading>
            {info?.address?.display && (
              <Text mb={2}>
                {info.address.display}
                {` - ${info.address.locality} / ${info.address.region}`}
              </Text>
            )}
            {info?.phone?.number && (
              <Text mb={2}>
                <Link href={info.phone.number}>{info.phone.display}</Link>
              </Text>
            )}
            {info?.email?.address && (
              <Text mb={2}>
                <Link href="/contato">{info.email.address}</Link>
              </Text>
            )}
          </Box>
        </Stack>
      </Container>
      <Container>
        <Divider />
        <Text color="aux.200" p={6} align="center">
          © {copyYears} Verbasa. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  )
}
interface QueryPros {
  site: {
    siteMetadata: {
      info: {
        address?: {
          display: string
          locality: string
          region: string
        }
        phone?: {
          number: string
          display: string
        }
        email?: {
          address: string
        }
      }
    }
  }
  mdx: {
    body: string
    frontmatter: {
      logo: string
      linksLists: Array<{
        title: string
        linksList: Array<{
          label: string
          link: string
        }>
      }>
    }
  }
}

const Footer: React.FC = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: QueryPros) => {
        const templateData = {
          body: data.mdx.body,
          logo: data.mdx.frontmatter.logo,
          linksLists: data.mdx.frontmatter.linksLists,
          info: data.site.siteMetadata.info,
        }
        return <Template data={templateData} />
      }}
    />
  )
}

export default Footer

const query = graphql`
  query {
    site {
      siteMetadata {
        info {
          address {
            display
            locality
            region
          }
          phone {
            number
            display
          }
          email {
            address
          }
        }
      }
    }
    mdx(frontmatter: { componentKey: { eq: "footer" } }) {
      body
      frontmatter {
        logo
        linksLists {
          title
          linksList {
            label
            link
          }
        }
      }
    }
  }
`
