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
    }
  ]
}

export default config
