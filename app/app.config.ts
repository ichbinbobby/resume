export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "emerald",
      neutral: "slate",
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
  },
  colorMode: {
    preference: "dark", // Set dark mode as default
    fallback: "dark", // Fallback to dark if no preference
  },
});
