import { CmsField } from "netlify-cms-core"

const pageTitleField: CmsField = {
  label: "Title",
  name: "title",
  widget: "string",
  hint: "This is often used as H1 in html. (seo reference)",
}

export default pageTitleField
