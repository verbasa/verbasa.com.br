import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Template } from "../../../../components/ui/Header"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const templateData = entry.getIn(["data"]).toJS()

  if (isLoadingAsset || !templateData) {
    return <div>Loading ...</div>
  } else {
    return <Template data={templateData} />
  }
}

export default PreviewTemplate
