require("dotenv").config({
  path: `.env`,
})
module.exports = {
  plugins: [
    {
      resolve: "@gatsbystorefront/gatsby-theme-storefront-shopify",
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: "/",
      },
    },
  ],
}
