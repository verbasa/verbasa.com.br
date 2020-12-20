import { CmsCollection } from "netlify-cms-core"
import home from "./files/home"
import about from "./files/about"
import entreParaOTime from "./files/entre-para-o-time"
import planoDeCarreira from "./files/plano-de-carreira"

const collection: CmsCollection = {
  label: "Pages",
  name: "pages",
  extension: "mdx",
  format: "frontmatter",
  summary: "{{title | upper}} -> {{fields.slug}} ",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [home, about, entreParaOTime, planoDeCarreira],
}

export default collection
