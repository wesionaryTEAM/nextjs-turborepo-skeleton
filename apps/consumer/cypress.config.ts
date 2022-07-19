import * as cypress from 'cypress'

export default cypress.defineConfig({
  e2e: {
    setupNodeEvents(_, config: Cypress.PluginConfigOptions) {
      // implement node event listeners here
      return {
        ...config,
        baseUrl: `${config.env.HOST}:${config.env.PORT}/`,
      }
    },
  },
})
