import { CmsCollectionFile } from "netlify-cms-core"

const collectionFile: CmsCollectionFile = {
  file: "content/favicon/favicon.json",
  label: "Site Favicon",
  name: "siteFavicon",
  fields: [
    {
      label: "Favicon",
      name: "favicon",
      widget: "image",
      hint:
        'the filename must be "favicon.ico" to get working. best format is 32x32 px',
    },
  ],
}

export default collectionFile
