import { CmsCollectionFile } from "netlify-cms-core"
import {
  buttonsGroup,
  componentKeyField,
  iconField,
  linkField,
} from "../../../schemas"

const headerCollectionFile: CmsCollectionFile = {
  file: "content/components/header.mdx",
  label: "Header",
  name: "header",
  fields: [
    { ...componentKeyField, options: ["header"], default: ["header"] },
    {
      ...iconField,
      label: "Logo",
      name: "logo",
    },
    {
      label: "Menu",
      name: "menu",
      widget: "list",
      max: 10,
      fields: [
        {
          label: "Label",
          name: "label",
          widget: "string",
        },
        linkField,
      ],
    },
    {
      ...buttonsGroup,
      max: 2,
    },
  ],
}

export default headerCollectionFile
