import { CmsCollectionFile } from "netlify-cms-core"
import {
  bodyField,
  colorRelationField,
  iconField,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../../schemas"

const entreParaOTimePageCollection: CmsCollectionFile = {
  file: "content/pages/plano-de-carreira.mdx",
  label: "Plano de carreira",
  name: "plano-de-carreira",
  fields: [
    {
      ...templateKeyField,
      options: [
        { label: "Plano de carreira", value: "pages/plano-de-carreira" },
      ],
      default: ["pages/plano-de-carreira"],
    },
    slugField,
    pageTitleField,
    bodyField,
    {
      label: "Levels",
      name: "levels",
      widget: "list",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        iconField,
        colorRelationField,
        {
          label: "Data informations",
          name: "infos",
          widget: "list",
          fields: [
            { label: "Key", name: "key", widget: "string", required: false },
            {
              label: "Value",
              name: "value",
              widget: "string",
              required: false,
            },
          ],
        },
      ],
    },
    metadataObject,
  ],
}

export default entreParaOTimePageCollection
