import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  ListItem,
  useDisclosure,
  LinkProps,
} from "@chakra-ui/react"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Container from "../Container"
import Link from "../../mdx/Link"
import SVGIcon from "../SVGIcon"
import BurgerMenuIcon from "./BurgerMenuIcon"

const MenuItem: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <ListItem
      position="relative"
      p={3}
      pb={1}
      _after={{
        content: `" "`,
        position: "absolute",
        borderBottom: "2px",
        borderColor: "brand.500",
        bottom: 0,
        left: "50%",
        w: "0%",
        h: 0,
        transform: "translateX(-50%)",
        transition: "all",
        transitionDuration: "220ms",
      }}
      _hover={{
        _after: {
          w: "50%",
        },
      }}
    >
      <Link href={href} _hover={{ textDecoration: "none" }}>
        {children}
      </Link>
    </ListItem>
  )
}

interface TemplateProps {
  data: {
    logo: string
    menu: Array<{
      label: string
      link: string
    }>
    buttons: Array<{
      label: string
      link: string
      variant: string
      colorScheme: string
    }>
  }
}

export const Template: React.FC<TemplateProps> = ({
  data: { logo, menu, buttons },
}) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Box as="header" bg={"white"} color={"black"} shadow={"base"}>
      <Container>
        <Flex direction={{ base: "column", lg: "row" }}>
          <Flex
            items="center"
            justify={{ base: "space-between", lg: "flex-start" }}
          >
            <Box display={{ base: "block", lg: "none" }} w={8} pt={2}>
              <BurgerMenuIcon
                toggleNavbarMenu={onToggle}
                isNavbarOpen={isOpen}
                outline="none"
              />
            </Box>
            <Link href="/">
              <SVGIcon name={logo} h={10} w="auto" mr={{ lg: 4 }} />
            </Link>
            <Box display={{ base: "block", lg: "none" }} w={8}></Box>
          </Flex>
          <Box
            as="nav"
            display={{ base: isOpen ? "block" : "none", lg: "block" }}
            w="100%"
          >
            <Flex
              w="100%"
              direction={{ base: "column", lg: "row" }}
              justify="space-between"
              align="center"
            >
              <Flex
                as="ul"
                direction={{ base: "column", lg: "row" }}
                justify="center"
                align="center"
                listStyleType="none"
                pt={{ base: 4, lg: 0 }}
              >
                {menu.map(menuItem => (
                  <MenuItem key={menuItem.label} href={menuItem.link}>
                    {menuItem.label}
                  </MenuItem>
                ))}
              </Flex>
              <Flex justify="center" align="center" pt={{ base: 6, lg: 0 }}>
                <ButtonGroup>
                  {buttons.map(button => (
                    <Button
                      key={button.label}
                      as={Link}
                      href={button.link}
                      colorScheme={button.colorScheme}
                      variant={button.variant}
                    >
                      {button.label}
                    </Button>
                  ))}
                </ButtonGroup>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

interface QueryProps {
  mdx: {
    body: string
    frontmatter: {
      logo: string
      menu: Array<{
        label: string
        link: string
      }>
      buttons: Array<{
        label: string
        link: string
        variant: string
        colorScheme: string
      }>
    }
  }
}

const Header: React.FC = () => {
  return (
    <StaticQuery
      query={query}
      render={(data: QueryProps) => {
        return <Template data={data.mdx.frontmatter} />
      }}
    />
  )
}

export default Header

const query = graphql`
  query {
    mdx(frontmatter: { componentKey: { eq: "header" } }) {
      frontmatter {
        logo
        menu {
          label
          link
        }
        buttons {
          label
          link
          variant
          colorScheme
        }
      }
    }
  }
`
