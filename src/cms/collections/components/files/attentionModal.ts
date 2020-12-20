import { CmsCollectionFile } from "netlify-cms-core"
import { bodyField, componentKeyField, imageField } from "../../../schemas"

const attentionModal: CmsCollectionFile = {
  file: "content/components/attentionModal.mdx",
  label: "Attention Modal",
  name: "attentionModal",
  fields: [
    {
      ...componentKeyField,
      options: ["attentionModal"],
      default: ["attentionModal"],
    },
    {
      label: "Title",
      name: "title",
    },
    { label: "Active", name: "active", widget: "boolean" },
    bodyField,
    {
      label: "Button Label",
      name: "label",
    },
  ],
}

export default attentionModal
