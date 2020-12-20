import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Template } from "../../../../templates/pages/entre-para-o-time"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const cmsData = entry.getIn(["data"]).toJS()
  const templateData = {
    ...cmsData,
    isPreview: true,
  }

  if (isLoadingAsset || !templateData) {
    return <div>Loading ...</div>
  } else {
    return <Template data={templateData} />
  }
}

export default PreviewTemplate
