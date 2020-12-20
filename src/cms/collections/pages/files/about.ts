import { CmsCollectionFile } from "netlify-cms-core"
import {
  bodyField,
  cardsGroup,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../../schemas"

const aboutPageCollection: CmsCollectionFile = {
  file: "content/pages/about.mdx",
  label: "Quem Somos",
  name: "about",
  fields: [
    {
      ...templateKeyField,
      options: [{ label: "About", value: "pages/about" }],
      default: ["pages/about"],
    },
    slugField,
    pageTitleField,
    bodyField,
    cardsGroup,
    {
      label: "Missão",
      name: "mission",
      widget: "object",
      fields: [
        { label: "Background Image", name: "bgImage", widget: "image" },
        { label: "Text", name: "text", widget: "string" },
      ],
    },
    {
      label: "Visão",
      name: "vision",
      widget: "object",
      fields: [
        { label: "Background Image", name: "bgImage", widget: "image" },
        { label: "Text", name: "text", widget: "string" },
      ],
    },
    {
      label: "Valores",
      name: "values",
      widget: "object",
      field: cardsGroup,
    },
    metadataObject,
  ],
}

export default aboutPageCollection
