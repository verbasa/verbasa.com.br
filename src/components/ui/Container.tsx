import { Box } from "@chakra-ui/react"
import React from "react"
import { chakra } from "@chakra-ui/react"

const Container: React.FC = ({ children, ...rest }) => {
  return (
    <Box
      as="div"
      width="90%"
      maxWidth="80rem"
      margin="0 auto"
      py={["1.23rem", "1.628rem"]}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default chakra(Container)
