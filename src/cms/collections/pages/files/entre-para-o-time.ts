import { CmsCollectionFile } from "netlify-cms-core"
import {
  buttonsGroup,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
  youtubeField,
} from "../../../schemas"

const entreParaOTimePageCollection: CmsCollectionFile = {
  file: "content/pages/entre-para-o-time.mdx",
  label: "Entre para o time",
  name: "entre-para-o-time",
  fields: [
    {
      ...templateKeyField,
      options: [
        { label: "Entre para o time", value: "pages/entre-para-o-time" },
      ],
      default: ["pages/entre-para-o-time"],
    },
    slugField,
    pageTitleField,

    {
      label: "Hero",
      name: "hero",
      widget: "object",
      fields: [
        { label: "Background Image", name: "bgImage", widget: "image" },
        { label: "Title", name: "title", widget: "string" },
        youtubeField,
      ],
    },
    {
      label: "Plans",
      name: "plans",
      widget: "list",
      fields: [
        { label: "Label", name: "label" },
        { label: "Label Prefix", name: "labelPrefix", required: false },
        { label: "Price", name: "price", widget: "string" },
        {
          label: "Info List",
          name: "infoList",
          widget: "list",
          fields: [
            { label: "key", name: "key" },
            {
              label: "Value",
              name: "value",
              widget: "string",
              required: false,
            },
          ],
        },
        buttonsGroup,
      ],
    },

    metadataObject,
  ],
}

export default entreParaOTimePageCollection
