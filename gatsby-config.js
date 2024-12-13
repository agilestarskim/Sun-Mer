/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sun & Mer`,
    description: `Sun & Mer Pop Band`,
    author: `@sun8mer`,
    image: `/images/OG.JPG`,
    stats: [
      {
        number: "4+",
        label: "Years of Music"
      },
      {
        number: "50+",
        label: "Live Shows"
      },
      {
        number: "13+",
        label: "Original Songs"
      }
    ],
    videos: [
      { id: 1, title: "사랑으로 우리는", videoId: "xl-GcYQ1N5g" },
      { id: 2, title: "d!ve", videoId: "pJWD9mWj7V8" },
      { id: 3, title: "탈(Higher)", videoId: "tm4_dSk3Hg4" },
      { id: 4, title: "bonnie & clyde", videoId: "rE7wrUSAOXk" },
      { id: 5, title: "Heart Hurts", videoId: "gg_ICIzyQgc" },    
      { id: 6, title: "편집증 (Paranoia)", videoId: "BivYmP3YMxk" }
    ],
    socialLinks: [
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCElCCdSKstO6m9nhhgHKNdw"
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/artist/1GbmCdNlnSjdELYPmh7RZM"
      },
      {
        name: "TikTok",
        url: "https://www.tiktok.com/@sunandmer"
      },
      {
        name: "SoundCloud",
        url: "https://soundcloud.com/sunandmer"
      }
    ],
    instagramPosts: [
      { id: "DBYvy6Jy5pW" },
      { id: "DBFmiinyH_D" },
      { id: "C_4bayaSCc1" },
      { id: "C_hHt_FysD2" },
      { id: "C_Klu6RSg9D" },
      { id: "C9uILwaS1s7" },
      { id: "C7d2jI5JFDZ" },
      { id: "C5zndt9JEOa" },
      { id: "C4AiYMDJ7ZV" },
      { id: "C1Ulhj8puCo" },
      { id: "Cy5-sbKJsRn" },
      { id: "Cxit6VBSYjS" }
    ],
    contactInfo: {
      instagram: {
        username: "@sun8mer",
        url: "https://www.instagram.com/sun8mer"
      },
      bandName: "Sun & Mer"
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/src/images/logo/logo.PNG`,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
