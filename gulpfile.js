// Gulp setup
var gulp = require('gulp');
var path = require('path');

// Load up plugins automatically
var plug = require('gulp-load-plugins')();

// Handles errors
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

// Compile Our Sass with Bundle Compass
gulp.task('sass', function () {
    return gulp.src('../scss/*.scss')
        .pipe(plug.compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'scss',
            check: true,
            debug: false,
            comments: true,
            bundle_exec: true,
            project: path.join(__dirname, '../'),
            style: 'expanded',
            require: ['singularitygs', 'breakpoint']
        }))
        .on("error", handleError)
        .pipe(plug.autoprefixer({
            cascade: true
        }))
        .pipe(gulp.dest('../css'))
        .pipe(plug.livereload());
});

// Watch Files For Changes
gulp.task('watch', function () {
    // Watch for scss changes
    gulp.watch('../**/*.scss', ['sass']);
});

// Default Task - run sass task then watch task
gulp.task('default', ['sass', 'watch']);