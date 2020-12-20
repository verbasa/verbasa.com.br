import { CmsCollectionFile } from "netlify-cms-core"
import { bodyField, componentKeyField } from "../../../schemas"

const newsletter: CmsCollectionFile = {
  file: "content/components/faqForm.mdx",
  label: "Faq Form",
  name: "faqForm",
  fields: [
    { ...componentKeyField, options: ["faqForm"], default: ["faqForm"] },
    {
      label: "Title",
      name: "title",
    },
    bodyField,
  ],
}

export default newsletter
