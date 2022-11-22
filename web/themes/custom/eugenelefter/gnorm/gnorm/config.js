const src = './app'
const dest = './build'

module.exports = {
  app: src,
  build: dest,
  browserSyncConfig: {
    ui: false,
    server: false,
    open: false,
    notify: false,
    port: 3000
  },
  rootFiles: {
    src: [
      `${src}/favicon*.*`,
      `${src}/robots.txt`
    ],
    dest: dest
  },
  fonts: {
    src: `${src}/fonts/**/*`,
    dest: `${dest}/fonts`
  },
  images: {
    src: `${src}/images/**`,
    dest: `${dest}/images`
  },
  scripts: {
    all: `${src}/scripts/**/*.js`,
    modules: `${src}/scripts/modules`,
    src: `${src}/scripts/app.js`,
    dest: `${dest}/scripts`,
    libsSrc: `${src}/scripts/libs/**/*.js`,
    libsDest: `${dest}/scripts/libs/`,
    publicPath: '/themes/custom/brands_base/gnorm/build/scripts/'
  },
  styles: {
    src: [
      `${src}/styles/**/*.{sass,scss}`
    ],
    dest: `${dest}/styles`
  },
  twig: {
    data: `${src}/json`,
    dest: dest,
    global: `${src}/json/global.json`,
    pattern: `${src}/*.twig`,
    source: src,
    src: `${src}/*.twig`,
    namespaces: {
      images: `${src}/images`,
      includes: `${src}/includes`
    },
    watchSrc: [
      `${src}/**/*.twig`,
      `${src}/json/*.json`
    ]
  }
}
