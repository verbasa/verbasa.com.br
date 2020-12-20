import { CmsCollection } from "netlify-cms-core"
import header from "./files/header"
import newsletter from "./files/newsletter"
import faqForm from "./files/faqForm"
import footer from "./files/footer"
import attentionModal from "./files/attentionModal"

const collection: CmsCollection = {
  label: "Components",
  name: "components",
  extension: "mdx",
  format: "frontmatter",
  media_folder: "../../static/img",
  public_folder: "/img",
  files: [header, newsletter, faqForm, footer, attentionModal],
}

export default collection
