import React, { ComponentType } from "react"
import { Box } from "@chakra-ui/react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import CategoryTemplate from "../../../templates/faq/CategoryTemplate"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const templateData = entry.getIn(["data"]).toJS()

  if (isLoadingAsset || !templateData) {
    return <div>Loading ...</div>
  } else {
    return (
      <Box w={{ base: "90%", md: "60%" }} mx="auto" p={10}>
        <CategoryTemplate {...templateData} />
      </Box>
    )
  }
}

export default PreviewTemplate
