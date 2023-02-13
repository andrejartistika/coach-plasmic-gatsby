import type { GatsbyConfig } from "gatsby"
const path = require('path')

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": path.resolve(__dirname, 'src/components'),
          "assets": path.resolve(__dirname, 'src/assets'),
          "constants": path.resolve(__dirname, 'src/constants'),
          "helpers": path.resolve(__dirname, 'src/helpers')



        },
        extensions: []
      }
    },
    {
      resolve: '@plasmicapp/loader-gatsby',
      options: {
        projects: [
          {
            id: 'n7JM2c9rKsJq2MtgHpQAyH', // ID of a project you are using
            token: 'ai44IRJlp56DOru7FJZGX3FdVmGxmGbxkmS8IIVr0lndQjExTJxhdDT5Nj1M9cV3m18eFT5AJNjJi6ek25Q' // API token for that project
          }
        ],
        // Fetches the latest revisions, whether or not they were unpublished!
        // Disable for production to ensure you render only published changes.
        preview: true,
        // defaultPlasmicPage: require.resolve('./src/templates/defaultPlasmicPage.tsx'),

      }
    }
  ]
}

export default config
