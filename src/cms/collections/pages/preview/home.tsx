import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Template } from "../../../../templates/pages/home"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const cmsData = entry.getIn(["data"]).toJS()
  const templateData = {
    ...cmsData,
    description: {
      ...cmsData.description,
      body: cmsData.body,
      isPreview: true,
    },
  }

  if (isLoadingAsset || !templateData) {
    return <div>Loading ...</div>
  } else {
    return <Template data={templateData} />
  }
}

export default PreviewTemplate
