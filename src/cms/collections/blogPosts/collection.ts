import { CmsCollection, CmsField } from "netlify-cms-core"
import {
  bodyField,
  metadataObject,
  pageTitleField,
  slugField,
  templateKeyField,
} from "../../schemas"

const fields: CmsField[] = [
  {
    ...templateKeyField,
    options: [{ label: "Blog Post", value: "blog/post" }],
    default: ["blog/post"],
  },
  slugField,
  pageTitleField,
  {
    label: "Author",
    name: "author",
    widget: "relation",
    collection: "authors",
    search_fields: ["name"],
    value_field: "slug",
    display_fields: ["name"],
  },
  {
    label: "Category",
    name: "category",
    widget: "relation",
    collection: "blogCategory",
    search_fields: ["title"],
    value_field: "slug",
    display_fields: ["title"],
  },
  bodyField,
  { label: "Caption", name: "caption", widget: "string", required: false },
  {
    label: "Image",
    name: "image",
    widget: "image",
    required: false,
  },
  {
    label: "Background Image",
    name: "bgImage",
    widget: "image",
    required: false,
    hint: "This image will replace category background image.",
  },
  metadataObject,
]

const collection: CmsCollection = {
  label: "Blog Posts",
  label_singular: "Blog Post",
  name: "blogPost",
  folder: "content/blog/post",
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
