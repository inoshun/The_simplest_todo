export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "The Sinplest To-Do",
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
      },
      {
        hid: "description",
        name: "description",
        content: "This is the simplest and most usuful To-Do App."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/earlyaccess/notosansjapanese.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/style/style.scss", "~assets/style/common.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/set-min-height.client.js", "~plugins/todos-init.client.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources"
  ],
  styleResources: {
    scss: ["~assets/style/variables.scss"]
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
