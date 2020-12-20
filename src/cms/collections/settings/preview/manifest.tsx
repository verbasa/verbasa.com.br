import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Img, Wrap, WrapItem } from "@chakra-ui/react"

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
}) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <Wrap justify="center" items="center">
        <WrapItem w="1/2">
          <Img w="10" src={data.icon} alt="logo" />
        </WrapItem>
        <WrapItem w="1/2">
          <Img w="10" src={data.icon} alt="logo" />
        </WrapItem>
      </Wrap>
    )
  } else {
    return <div>Loading ...</div>
  }
}

export default PreviewTemplate
