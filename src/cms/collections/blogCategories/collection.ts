import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Categories", value: "blog/category" }],
    default: ["blog/category"],
  },
  slugField,
  pageTitleField,
  {
    label: "Background Image",
    name: "bgImage",
    widget: "image",
    required: false,
  },
  metadataObject,
]

const collection: CmsCollection = {
  label: "Blog Categories",
  label_singular: "Blog Category",
  name: "blogCategory",
  folder: "content/blog/category",
  create: true,
  delete: true,
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../../static/img/blog",
  public_folder: "/img/blog",
  summary: "{{title}}",
  sortable_fields: ["title", "metadata.dateModified"],
  fields,
}

export default collection
