export const env = process.argv.indexOf('-p') !== -1 ? 'production' : 'development';
export const production = env === 'production' ? true : false;

export const baseDir = {
  static: './static',
  src: './src',
  dist: './dist',

  styles: {
    src: ['sass/**/*.scss', 'css/**/*.css'],
    dest: 'css/',
  },

  scripts: {
    src: 'js/**/*.js',
    dest: 'js/',
  },

  images: {
    src: 'img/**/*',
    dest: 'img/'
  },

  pages: {
    src: ['**/*.html', '**/*.php'],
    dest: '/'
  }
};

export const configs = {
  styles: {
    sass: {

    },
    cssnano: {
      preset: 'default'
    },
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  },

  images: {
    options: {
      verbose: true,
    },
    quality: {
      jpeg: 70,
      png : 70
    }
  },

  browsersync: {
    proxy: false,
    watch: '**/*.*',
    options: {}
  },

  ftp: {
    host: '',
    user: '',
    port: '',
    password: '',
    directory: '',
    secure: true
  }
};
