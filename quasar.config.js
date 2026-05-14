/* eslint-env node */

const ESLintPlugin = require("eslint-webpack-plugin");
const { configure } = require("quasar/wrappers");

module.exports = configure(function (ctx) {
  return {
    supportTS: false,

    boot: [],

    css: ["app.scss"],

    extras: [
      "mdi-v7",
      "roboto-font",
      "material-icons",
    ],

    build: {
      vueRouterMode: "history",

      chainWebpack(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js", "vue"] }]);
      },
    },

    devServer: {
      server: {
        type: "http",
      },
      port: 8080,
      open: true,
    },

    framework: {
      config: {},
      iconSet: "mdi-v7",
      plugins: ["Notify", "Dialog", "Meta"],
    },

    animations: ["fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight"],

    ssr: {
      pwa: false,
      prodPort: 3000,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      chainWebpackWebserver(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
      middlewares: [
        ctx.prod ? "compression" : "",
        "render",
      ],
    },

    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},
      chainWebpackCustomSW(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
      manifest: {
        name: "昕禾居家清潔",
        short_name: "昕禾居家清潔",
        description: "昕禾居家清潔 - 專業居家清潔服務",
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#1a7f5a",
        icons: [
          { src: "icons/icon-128x128.png", sizes: "128x128", type: "image/png" },
          { src: "icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-256x256.png", sizes: "256x256", type: "image/png" },
          { src: "icons/icon-384x384.png", sizes: "384x384", type: "image/png" },
          { src: "icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
      },
    },

    ssg: {
      routes: ["/", "/services", "/about", "/contact"],
    },

    cordova: {},
    capacitor: { hideSplashscreen: true },

    electron: {
      bundler: "packager",
      packager: {},
      builder: { appId: "home-cleaning-website" },
      chainWebpackMain(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
      chainWebpackPreload(chain) {
        chain
          .plugin("eslint-webpack-plugin")
          .use(ESLintPlugin, [{ extensions: ["js"] }]);
      },
    },
  };
});
