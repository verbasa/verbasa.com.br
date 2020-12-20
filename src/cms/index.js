import CMS from "netlify-cms-app"
// import { CmsConfig } from "netlify-cms-core"
import { collections, registerPreviews } from "./collections"
import { repository } from "../../package.json"
import cloudinary from "netlify-cms-media-library-cloudinary"
import uploadcare from "netlify-cms-media-library-uploadcare"
import publicKeys from "../../content/settings/publicKeys.json"
import { colorsEventPreSave } from "./collections/settings/events/colors"
// import { registerEvents } from "./betaFeatures"

let config = {
  backend: {
    name: "github",
    branch: "main",
    repo: repository.split("github.com/")[1].split(".git")[0],
  },
  display_url: window.location.origin,
  publish_mode: "editorial_workflow",
  slug: {
    encoding: "unicode",
    clean_accents: true,
  },
  collections,
}

if (publicKeys?.cloudinary?.api_key) {
  CMS.registerMediaLibrary(cloudinary)
  config.media_library = {
    name: "cloudinary",
    config: publicKeys.cloudinary,
    default_transformations: [
      [
        {
          width: 1600,
          height: 1200,
          quality: "auto",
          crop: "limit",
        },
      ],
    ],
  }
} else if (publicKeys?.uploadcare?.publicKey) {
  CMS.registerMediaLibrary(uploadcare)
  config.media_library = {
    name: "uploadcare",
    config: publicKeys.uploadcare,
    settings: {
      autoFilename: true,
      imagesOnly: true,
      defaultOperations: "/resize/1200x800/",
      imageShrink: "1200x1200",
      fadeIn: true,
      lazyload: true,
      smartCompression: true,
      responsive: true,
      retina: true,
      webp: true,
    },
  }
} else {
  config = {
    ...config,
    media_folder: "static/img",
    media_folder_relative: true,
    public_folder: "/img",
    max_file_size: 512000,
  }
}

if (process.env.NODE_ENV === "development") {
  // config.local_backend = true
  config.local_backend = {
    url: "http://localhost:8081/api/v1",
    allowed_hosts: ["192.168.*.*"],
  }
}

CMS.registerPreviewStyle("/font.css")

CMS.init({ config })

registerPreviews()

CMS.registerEventListener({
  name: "preSave",
  handler: data => {
    return colorsEventPreSave(data)
  },
})
