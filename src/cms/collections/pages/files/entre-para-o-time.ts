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
        {
          label: "Buttons",
          name: "buttons",
          widget: "list",
          fields: [
            {
              label: "Label",
              name: "label",
              widget: "string",
            },
            {
              label: "Color Scheme",
              name: "colorScheme",
              widget: "select",
              options: ["brand", "blue", "red", "grey"],
            },
            {
              label: "Variant",
              name: "variant",
              widget: "select",
              options: ["solid", "ghost", "outline", "link"],
            },
            {
              label: "Link",
              name: "link",
              widget: "string",
              pattern: [
                "(https?:/||)(/[da-z.-]+)([/w.-]*)*?",
                'A url must start with "https://" and have no spaces or special characters. Start with / for a internal website pages',
              ],
              hint:
                'use only "/some-reference" for a link inside this website.',
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
