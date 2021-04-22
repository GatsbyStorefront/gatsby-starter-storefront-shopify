require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopify: {
          shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
          accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        },
        gatsbyStorefrontApi: {
          apiUrl: process.env.GATSBYSTOREFRONT_API_URL,
          accessToken: process.env.GATSBYSTOREFRONT_ACCESS_TOKEN,
        },
        useGatsbyStorefrontApi: false,
        basePath: '/',
        productImagesCarouselProps: {
          // See: https://github.com/express-labs/pure-react-carousel#carouselprovider-
          // naturalSlideWidth: 500,
          // naturalSlideHeight: 500,
        },
        product: {
          maxDescriptionSectionsNumber: 10,
        },
        reviews: {
          reviewsNumberPerPage: 10,
        },
        manifest: {
          name: 'Gatsby Storefront Demo Store',
          short_name: 'Gatsby Storefront',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/shopping_bag.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://demo.gatsbystorefront.com',
    gatsbyStorefrontConfig: {
      storeName: 'Gatsby Storefront',
      storeDescription: 'Demo store description',
      email: 'info@gatsbystorefront.com',
      company: 'Gatsby Storefront Inc.',
      location: 'New York, NY',
      address: '1 Centre St.',
      phone: '+1 (800) 123-1234',
      workingDays: 'Mon - Fri',
      workingHours: '8AM - 6PM',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Jewelery',
              type: 'collection',
              handle: 'jewelery',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Silk Summer Top',
              type: 'product',
              handle: 'silk-summer-top',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Apparel',
              type: 'collection',
              handle: 'apparel',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'Garden',
              type: 'collection',
              handle: 'garden',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          type: 'section',
          children: [
            {
              name: 'Red Sports Tee',
              type: 'product',
              handle: 'red-sports-tee',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Anchor Bracelet Mens',
              type: 'product',
              handle: 'leather-anchor',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Yellow Sofa',
              type: 'product',
              handle: 'yellow-sofa',
              textColor: 'black',
              textBgColor: 'white',
            },
          ],
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Women's",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'Jewelery',
                type: 'collection',
                handle: 'jewelery',
              },
              {
                name: 'One product',
                type: 'product',
                handle: 'red-sports-tee',
              },
            ],
          },
          {
            name: "Men's",
            type: 'header',
            children: [
              {
                name: 'Test',
                type: 'collection',
                handle: 'test-collection',
              },
              {
                name: 'Garden',
                type: 'collection',
                handle: 'garden',
              },
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
        {
          name: 'External',
          link: 'https://amazon.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },
};
