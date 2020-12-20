import { CmsCollectionFile } from "netlify-cms-core"
import {
  buttonFields,
  buttonsGroup,
  cardsGroup,
  linkField,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../../schemas"

const homePageCollection: CmsCollectionFile = {
  file: "content/pages/index.mdx",
  label: "Home",
  name: "home",
  fields: [
    {
      ...templateKeyField,
      options: [{ label: "Home Page", value: "pages/home" }],
      default: ["pages/home"],
    },
    { ...slugField, pattern: ["/", "Home page must be '/' only"] },
    pageTitleField,
    {
      label: "Hero",
      name: "hero",
      widget: "object",
      fields: [
        { label: "Background Image", name: "bgImage", widget: "image" },
        { label: "Title", name: "title", widget: "string" },
        { label: "Headline", name: "headline", widget: "string" },
        { ...buttonsGroup, fields: [...buttonFields, linkField] },
      ],
    },
    {
      label: "Call to action",
      name: "callToAction",
      widget: "object",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        cardsGroup,
        buttonsGroup,
      ],
    },
    {
      label: "Description",
      name: "description",
      widget: "object",
      fields: [{ label: "Title", name: "title", widget: "string" }, cardsGroup],
    },
    {
      label: "Body (of Description)",
      name: "body",
      widget: "markdown",
    },
    metadataObject,
  ],
}

export default homePageCollection
