import { CmsCollectionFile } from "netlify-cms-core"
import { bodyField, componentKeyField, imageField } from "../../../schemas"

const newsletter: CmsCollectionFile = {
  file: "content/components/newsletter.mdx",
  label: "Newsletter",
  name: "newsletter",
  fields: [
    { ...componentKeyField, options: ["newsletter"], default: ["newsletter"] },
    {
      label: "Title",
      name: "title",
    },
    bodyField,
    imageField,
  ],
}

export default newsletter
