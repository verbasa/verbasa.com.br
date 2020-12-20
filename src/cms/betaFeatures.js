// import CMS from "netlify-cms-app"
// import { colorsEventPreSave } from "./collections/settings/events/colors"

// export default function registerEvents() {
//   // CMS.registerEventListener({
//   //   name: "prePublish",
//   //   handler: () => console.log("prePublish"),
//   // })
//   // CMS.registerEventListener({
//   //   name: "postPublish",
//   //   handler: () => console.log("postPublish"),
//   // })
//   // CMS.registerEventListener({
//   //   name: "preUnpublish",
//   //   handler: () => console.log("preUnpublish"),
//   // })
//   // CMS.registerEventListener({
//   //   name: "postUnpublish",
//   //   handler: () => console.log("postUnpublish"),
//   // })
//   CMS.registerEventListener({
//     name: "preSave",
//     handler: data => {
//       return colorsEventPreSave(data)
//       // console.log("preSave - ", JSON.stringify(entry.get("data"))),
//     },
//   })
//   // CMS.registerEventListener({
//   //   name: "postSave",
//   //   handler: data => {
//   //     console.log("postSave")
//   //     // console.log(
//   //     //   "------------\n\n ",
//   //     //   JSON.stringify(data),
//   //     //   "\n\n--------------"
//   //     // ),
//   //   },
//   // })
// }
