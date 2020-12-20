import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Template } from "../../../../templates/pages/plano-de-carreira"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const cmsData = entry.getIn(["data"]).toJS()
  const templateData = {
    ...cmsData,
    isPreview: true,
  }

  if (isLoadingAsset || !cmsData) {
    return <div>Loading ...</div>
  } else {
    // return <div>{JSON.stringify(templateData)}</div>
    return <Template data={templateData} />
  }
}

export default PreviewTemplate
