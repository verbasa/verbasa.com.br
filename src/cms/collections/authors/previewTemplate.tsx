import React, { ComponentType } from "react"
import { Box, Heading } from "@chakra-ui/react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
}) => {
  const title = entry.getIn(["data", "title"])
  return (
    <Box>
      <Heading>{title}</Heading>
    </Box>
  )
}

export default PreviewTemplate
