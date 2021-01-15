import { CmsField } from "netlify-cms-core"

const linkField: CmsField = {
  label: "Link",
  name: "link",
  widget: "string",
  pattern: [
    "(https?:/||)(/[da-z.-]+)([/w.-]*)*?",
    'A url must start with "https://" and have no spaces or special characters. Start with / for a internal website pages',
  ],
  hint: 'use only "/some-reference" for a link inside this website.',
}

export default linkField
