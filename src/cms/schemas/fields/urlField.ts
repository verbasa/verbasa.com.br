import { CmsField } from "netlify-cms-core"

const urlField: CmsField = {
  label: "Url",
  name: "url",
  widget: "string",
  default: "https://",
  pattern: [
    "(https?://)([-a-zA-Z0-9@:%_+.~#?&//=])*",
    'A url must start with "https://" and have no spaces or special characters',
  ],
}

export default urlField
