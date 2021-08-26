module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "musuem-app",
  },
  plugins: [
    /* {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "",
        spaceId: "",
      },
    }, */
    /*{
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    }, */
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images",
      },
      __key: "images",
    },
  ],
};
