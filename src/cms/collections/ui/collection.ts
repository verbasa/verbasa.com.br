import { CmsCollection } from "netlify-cms-core"
import button from "./files/button"

const collection: CmsCollection = {
  label: "UI Design",
  name: "ui",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img",
  public_folder: "../../static/img",
  files: [button],
}

export default collection
