import { Box, Center } from "@chakra-ui/react"
import React from "react"
import { DefaultLayout, SEO } from "../components"

const DefaultTemplate: React.FC = ({ children }) => {
  return (
    <DefaultLayout>
      <SEO />
      <Box textAlign="center" p={20} fontSize="2xl">
        {children}
      </Box>
    </DefaultLayout>
  )
}

export default DefaultTemplate
