export const images = () => {
    return app.gulp.src(app.path.src.img)
    .pipe (app.plugins.plumber (
        app.plugins.notify.onError({
            title: "IMAGES",
            massage: "Error: <%= error.massage %>"
            })))
    .pipe (app.gulp.dest(app.path.build.img))
    .pipe (app.plugins.browsersync.stream ())
    
}