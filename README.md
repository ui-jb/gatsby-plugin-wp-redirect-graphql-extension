## Description
This is a Gatsby plugin made to work in tandem with the WordPress Redirect GraphQL Extension plugin. It pulls redirection data from WordPress and builds those redirects automatically for you. Currently, this plugin igores regex and non-url redirects.

## How to install
`npm install gatsby-plugin-wp-redirect-graphql-extension`
## When do I use this plugin?
This plugin is helpful if you're using the WordPress Redirect GraphQL Extension and would like to automatically build your sites redirects.
## Examples of usage
```javascript
  plugins: [
    `gatsby-plugin-wp-redirect-graphql-extension`,
  ],
```