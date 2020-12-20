import { CmsField } from "netlify-cms-core"
import iconField from "../fields/iconField"
import linkField from "../fields/linkField"

const cardsGroup: CmsField = {
  label: "Cards",
  name: "cards",
  widget: "list",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    iconField,
    { label: "Text", name: "text", widget: "string", required: false },
    { ...linkField, required: false },
  ],
}

export default cardsGroup
