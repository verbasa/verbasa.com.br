import { CmsField } from "netlify-cms-core"
import buttonFields from "../fields/buttonFields"
import linkField from "../fields/linkField"

const buttonsGroup: CmsField = {
  label: "Buttons",
  name: "buttons",
  widget: "list",
  fields: [...buttonFields, linkField],
}

export default buttonsGroup
