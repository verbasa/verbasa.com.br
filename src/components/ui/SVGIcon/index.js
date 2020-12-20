import React from "react"
import { createIcon, Icon } from "@chakra-ui/react"

const reqSvgs = require.context("./icons", true, /\.js$/)

export const iconsNames = reqSvgs
  .keys()
  .map(key => key.slice(2, key.length - 3))

const SVGIcon = ({ name, ...rest }) => {
  const svgData = reqSvgs(`./${name}.js`)
  if (svgData.default) {
    const ThisIcon = createIcon({ displayName: name, ...svgData.default })
    return <ThisIcon {...rest} />
  } else {
    return <div>missing Icon</div>
  }
}

export default React.memo(SVGIcon)
