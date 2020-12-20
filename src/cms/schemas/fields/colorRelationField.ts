import { CmsField } from "netlify-cms-core"

const colorRelationField: CmsField = {
  label: "Color",
  name: "color",
  widget: "relation",
  collection: "settings",
  file: "colors",
  value_field: "colors.*.colorsRefs.*",
  display_fields: ["colors.*.colorsRefs.*"],
  search_fields: ["colors.*.colors.*", "colors.*.label"],
}

export default colorRelationField
