import colorsCollectionFile from "../files/colors"

export const colorsEventPreSave = ({ entry }) => {
  const path = entry.get("path")
  let newColors = []
  if (path === colorsCollectionFile.file) {
    console.log("update colors references")

    const colorsData = entry.get("data").get("colors")
    colorsData.forEach(colorSet => {
      const label = colorSet.get("label")
      const colors = colorSet.get("colors")
      let colorsRefs = []
      colors.forEach((c, i) => {
        colorsRefs.push(`${label}.${i * 100 || 50}`)
      })
      newColors.push({
        label,
        colors,
        colorsRefs,
      })
    })

    return entry.get("data").set("colors", newColors)
  }
}
