import { CmsField } from "netlify-cms-core"

const componentKeyField: CmsField = {
  label: "Component Key",
  name: "componentKey",
  widget: "select",
  options: [{ label: "None", value: "none" }],
  default: ["none"],
}

export default componentKeyField
