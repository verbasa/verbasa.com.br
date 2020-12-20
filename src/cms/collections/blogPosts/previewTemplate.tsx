import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import PostTemplate from "../../../templates/faq/PostTemplate"
import { Container } from "../../../components"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const cmsData = entry.getIn(["data"]).toJS()
  const templateData = {
    post: {
      ...cmsData,
      body: cmsData.body,
      isPreview: true,
      metadata: {
        ...cmsData.metadata,
        relativeDateModified: "( data relativa )",
        originalDatePublished: "( data por extenso )",
      },
    },
  }

  if (isLoadingAsset || !templateData) {
    return <div>Loading ...</div>
  } else {
    return (
      <Container>
        <PostTemplate data={templateData} />
      </Container>
    )
  }
}

export default PreviewTemplate
