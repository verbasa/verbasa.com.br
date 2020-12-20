interface ColorsProps {
  colors: Array<{
    colors: string[]
    label: string
  }>
}

interface FormattedColorsProps {
  [key: string]: {
    [key: number]: string
  }
}

function formatCMSColorsToChakra(c: ColorsProps) {
  let formattedColors: FormattedColorsProps = {}
  if (!c.colors) {
    return
  }
  for (let colorSet of c.colors) {
    for (let i = 0; i < colorSet.colors.length; i++) {
      formattedColors[colorSet.label] = {
        ...formattedColors[colorSet.label],
        [i * 100 || 50]: colorSet.colors[i],
      }
    }
  }
  return formattedColors
}

export default formatCMSColorsToChakra
