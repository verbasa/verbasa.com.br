import { CmsCollection } from "netlify-cms-core"
import faviconCollectionFile from "./files/favicon"

const collection: CmsCollection = {
  label: "Favicon (!)",
  name: "favicon",
  extension: "json",
  format: "json",
  media_folder: "../../static/",
  public_folder: "/",
  files: [faviconCollectionFile],
}

export default collection
