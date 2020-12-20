import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  iconField,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Faq Categories", value: "faq/category" }],
    default: ["faq/category"],
  },
  slugField,
  pageTitleField,
  { label: "text", name: "text" },
  iconField,
  metadataObject,
]

const collection: CmsCollection = {
  label: "FAQ Categories",
  label_singular: "FAQ Category",
  name: "faqCategory",
  folder: "content/faq/category",
  create: true,
  delete: true,
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img/faq",
  public_folder: "/img/faq",
  summary: "{{title}} -> /faq/category{{fields.slug}}",
  sortable_fields: ["title", "metadata.dateModified"],
  fields,
}

export default collection
