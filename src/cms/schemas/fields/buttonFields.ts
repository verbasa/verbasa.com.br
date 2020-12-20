import { CmsField } from "netlify-cms-core"
import linkField from "./linkField"

const buttonFields: CmsField[] = [
  {
    label: "Label",
    name: "label",
    widget: "string",
  },
  {
    label: "Color Scheme",
    name: "colorScheme",
    widget: "select",
    options: ["brand", "blue", "red", "grey"],
  },
  {
    label: "Variant",
    name: "variant",
    widget: "select",
    options: ["solid", "ghost", "outline", "link"],
  },
]

export default buttonFields
