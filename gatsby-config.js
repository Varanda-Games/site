const path = require('path');

module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-svgr`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `team`,
                path: `${__dirname}/src/images/team`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `art`,
                path: `${__dirname}/src/images/art`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Varanda`,
                short_name: `varanda`,
                start_url: `/`,
                background_color: `#00FFCC`,
                theme_color: `#00FFCC`,
                display: `minimal-ui`,
                icon: `static/favicon.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`average`, `prata\:400,700`, `montserrat`, `quicksand`, `overpass`],
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@components': path.resolve(__dirname, 'src/components'),
                    '@common': path.resolve(__dirname, 'src/components/common'),
                    '@images': path.resolve(__dirname, 'src/images'),
                    '@sections': path.resolve(__dirname, 'src/components/sections'),
                    '@styles': path.resolve(__dirname, 'src/styles/'),
                    '@static': path.resolve(__dirname, 'static/'),
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "UA-167581127-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 10,
                // Defers execution of google analytics script after page load
                defer: false,
            },
        },
    ],
};