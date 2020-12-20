import { extendTheme } from "@chakra-ui/react"
import colors from "../../../content/settings/colors.json"
import formatCMSColorsToChakra from "../../transformers/formatCMSColorsToChakra"
import { Button, Heading } from "./components"
import fonts from "./fonts"

const theme = extendTheme({
  colors: formatCMSColorsToChakra(colors),
  fonts,
  components: {
    Button,
    Heading,
  },
})

export default theme
