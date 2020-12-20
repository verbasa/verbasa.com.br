import { CmsCollectionFile } from "netlify-cms-core"
import urlField from "../../../schemas/fields/urlField"

const socialCollectionFile: CmsCollectionFile = {
  file: "content/settings/social.json",
  label: "Social Network",
  name: "social",
  fields: [
    {
      label: "Social Networks",
      name: "networks",
      widget: "list",
      fields: [
        {
          label: "Name",
          name: "name",
          widget: "select",
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Twitter", value: "twitter" },
            { label: "Youtube", value: "youtube" },
          ],
        },
        urlField,
      ],
    },
  ],
}

export default socialCollectionFile
