// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    compass: {
      prod: {
        options: {
          relativeAssets: true,
          sourcemap: true,
          environment: 'production',
          cssDir: 'css',
          sassDir: 'sass',
          imagesDir: 'imgs',
          fontsDir: 'fonts',
          javascriptsDir: 'js',
          outputStyle: 'compressed',
          imagesPath: 'imgs',
          require: ['breakpoint']
        }
      }
    },
    watch: {
      css: {
        files: ['sass/**/*.scss'],
        tasks: ['compass', 'ftp_push'],
      }
    },
    ftp_push: {
      prod: {
        options: {
          host: "h3-concepts.com",
          dest: "public_html/h3wp2/wp-content/themes/theme-child",
          port: 21,
          username: "h3concepts",
          password: "5nG9lqZat1#UL2",
        },
        files: [
          {
            expand: true,
            cwd: '.',
            src: [
              'css/**'
            ]
          }
        ]
      }
    }
  });
  

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-sync');
};
