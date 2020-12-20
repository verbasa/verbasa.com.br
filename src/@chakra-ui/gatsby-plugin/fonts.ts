import googleFonts from "../../../content/settings/googleFonts.json"

const fonts =
  googleFonts.fonts.length === 0
    ? {
        body: `system-ui, sans-serif`,
        heading: `Georgia, serif`,
        mono: `Menlo, monospace`,
      }
    : {
        body: `${googleFonts.fonts[0].family}`,
        heading: `${googleFonts.fonts[0].family}`,
        mono: `Menlo, monospace`,
      }

export default fonts
