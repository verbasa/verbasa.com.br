import { CmsField } from "netlify-cms-core"

const youtubeField: CmsField = {
  label: "Video",
  name: "video",
  default: "https://www.youtube.com/embed/",
  pattern: [
    "https://www.youtube.com/embed/(‌​[w?‌​=]*)?",
    "Must be a youtube embedded link",
  ],
  hint: "Youtube only will be accepted",
}

export default youtubeField
