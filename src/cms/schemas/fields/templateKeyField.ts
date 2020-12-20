import { CmsField } from "netlify-cms-core"

const templateKeyField: CmsField = {
  label: "Template",
  name: "templateKey",
  widget: "select",
  options: [{ label: "Default", value: "default" }],
  default: ["default"],
}

export default templateKeyField
