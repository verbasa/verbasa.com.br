import { CmsField } from "netlify-cms-core"

const linkField: CmsField = {
  label: "Link",
  name: "link",
  widget: "string",
  pattern: [
    "^([/a-z0-9]*)(?:-[a-z0-9]+)*$",
    "A link can have no spaces or special characters",
  ],
  hint: 'use only "/some-reference" with link inside this website.',
}

export default linkField
