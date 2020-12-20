import { CmsField } from "netlify-cms-core"

import { iconsNames } from "../../../components/ui/SVGIcon"

const iconField: CmsField = {
  label: "Icon",
  name: "icon",
  widget: "select",
  options: iconsNames,
}

export default iconField
