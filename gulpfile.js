var gulp = require('gulp');
var webserver = require('gulp-webserver');
var ui5preload = require('gulp-ui5-preload');

gulp.task('ui5preload',function(){
    return gulp.src([
        'webapp/view/**/**.+(js|xml)',
        'webapp/controller/**/**.+js',
        'webapp/controls/**/**.+js',
        'webapp/utils/**/**.js',
        '!webapp/fonts/**',
        '!webapp/images/**',
        '!webapp/META-INF/**',
        '!webapp/WEB-INF/**'
        ])
        .pipe(ui5preload({base:'webapp/',namespace:'lego.ess'}))
        .pipe(gulp.dest('webapp'));
});

gulp.task('webserver', function() {
  gulp.src('webapp')
    .pipe(webserver({
      port: 9000,
      host: "0.0.0.0",	
      livereload: true,
      open: true,
      proxies: [
      		{
            source: '/resources',
            target: 'RESOURCES_URL'
            },
            {
            source: '/sap',
            target: 'SAP_URL'
            }
      	]
    }));
});

gulp.task('default', ['webserver']);