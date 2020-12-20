import React, { ComponentType } from "react"
import { PreviewTemplateComponentProps } from "netlify-cms-core"
import { Box, chakra, HStack, Text } from "@chakra-ui/react"
import tc from "tinycolor2"

interface colorSetProps {
  label: string
  colors: string[]
}

const PreviewTemplate: ComponentType<PreviewTemplateComponentProps> = ({
  entry,
  isLoadingAsset,
}) => {
  const data = entry.getIn(["data"]).toJS()

  if (isLoadingAsset || !data?.colors) {
    return <div>Loading ...</div>
  } else {
    return (
      <>
        {data.colors.map((colorSet: colorSetProps) => (
          <div key={colorSet.label}>
            {!!colorSet.label && (
              <Box key={colorSet.label}>
                <Text key={colorSet.label}>{colorSet.label}</Text>
                <HStack spacing={2} wrap="wrap">
                  {!!colorSet.colors &&
                    colorSet.colors.map((color: string, index: number) => (
                      <Box key={index}>
                        <Text align="center">.{index * 100 || 50}</Text>
                        <Box bg={color} p={2} position="relative">
                          <Text
                            color={tc(color).isDark() ? "white" : "black"}
                            opacity={0.618}
                          >
                            {color}
                          </Text>
                        </Box>
                      </Box>
                    ))}
                </HStack>
                {!!colorSet.colors && colorSet.colors.length === 1 && (
                  <Box>
                    <Text>{colorSet.label} Set Suggestion </Text>
                    <HStack wrap={"wrap"} spacing={0}>
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                        const refColor = tc(colorSet.colors[0])
                        const bLevel = 5 // Math.round((255 - refColor.getBrightness()) / 25) % 10
                        if (i < bLevel) {
                          refColor.lighten(6.18 * (bLevel - i))
                        }
                        if (i > bLevel) {
                          refColor.darken(6.18 * (i - bLevel))
                        }

                        return (
                          <Box bg={`#${refColor.toHex()}`} p={2}>
                            <Text
                              color={refColor.isDark() ? "white" : "black"}
                              opacity={0.618}
                            >
                              #{refColor.toHex()}
                              {i < 9 && (
                                <chakra.span color="transparent" w={0}>
                                  ,
                                </chakra.span>
                              )}
                            </Text>
                          </Box>
                        )
                      })}
                    </HStack>
                  </Box>
                )}
              </Box>
            )}
          </div>
        ))}
      </>
    )
  }
}

export default PreviewTemplate
