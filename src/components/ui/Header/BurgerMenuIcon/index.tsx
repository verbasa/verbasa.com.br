import React from "react"
import { Box, Button, ButtonProps, chakra } from "@chakra-ui/react"

const styles = require("./styles.module.css")

interface BurgerMenuIconProps extends ButtonProps {
  toggleNavbarMenu(): void
  isNavbarOpen: boolean
}

const BurgerMenuIcon: React.FC<BurgerMenuIconProps> = ({
  toggleNavbarMenu,
  isNavbarOpen,
  ...rest
}) => {
  return (
    <Button
      className={`${styles.burgerMenu}`}
      onClick={toggleNavbarMenu}
      bg="transparent"
      _hover={{ bg: "transparent" }}
      _active={{ bg: "transparent" }}
      _focus={{ boxShadow: "none" }}
      {...rest}
    >
      <Box className={isNavbarOpen ? styles.open : ""}>
        <chakra.span>&nbsp;</chakra.span>
        <chakra.span>&nbsp;</chakra.span>
        <chakra.span>&nbsp;</chakra.span>
      </Box>
    </Button>
  )
}

export default BurgerMenuIcon
