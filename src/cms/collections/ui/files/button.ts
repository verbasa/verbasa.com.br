import { CmsCollectionFile } from "netlify-cms-core"
import { colorRelationField, iconField } from "../../../schemas"

const buttonCollectionFile: CmsCollectionFile = {
  file: "content/ui/button.mdx",
  label: "Button",
  name: "button",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    colorRelationField,
    { label: "body", name: "body", widget: "markdown" },
    iconField,
  ],
}

export default buttonCollectionFile
