import emulsifyTheme from "gatsby-theme-emulsify/src/gatsby-plugin-theme-ui";
import merge from "lodash.merge";

export default merge({}, emulsifyTheme, {
  // Custom items here
  colors: {
    background: "#F7FAF9",
    text: "#2F495C",
    primary: "#003594",
    muted: "#DAE2E2",
    highlight: "#2F495C",
    accent: "#AAB1B1"
  },
  fonts: {
    body: "'PT Serif', serif",
    heading: "'Inter', sans-serif",
  },
  styles: {
    root: {
      fontSize: 3
    },
    h2: {
      fontSize: 5
    },
    h3: {
      color: "accent",
      fontSize: 3,
      textTransform: "uppercase"
    },
    h4: {
      color: "accent",
      fontSize: 2,
      textTransform: "uppercase"
    },
    h5: {
      fontSize: 1,
      textTransform: "uppercase"
    }
  }
})
