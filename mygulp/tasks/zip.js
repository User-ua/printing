//import { deleteAsync } from 'del';
//import zipPlagin from 'gulp-zip';

//export const zip = () => {
   // deleteAsync(`./${app.path.rootFolder}.zip`);
   // return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    //.pipe(app.plugins.plumber (
      ///  app.plugins.notify.onError({
         //   title: "ZIP",
        //    massage: "Error: <%= error.massage %>"
       // })
    //))
  //  .pipe(zipPlagin(`${app.path.rootFolder}.zip`))
  //  .pipe(app.gulp.dest('./'))
//}


import ghPages from 'gulp-gh-pages';

const deploy = () => {
    return gulp.src('./dist/**/*')
    .pipe(ghPages());
}
