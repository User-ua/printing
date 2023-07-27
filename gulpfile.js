//Основной модуль
import gulp from 'gulp';
//Импорт путей
import { path } from "./mygulp/config/path.js";

//Импорт общих плагинов
import { plugins } from './mygulp/config/plugins.js';

//Передаем значения в глобальную переменную

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

//Импорт задач
import {copy} from "./mygulp/tasks/copy.js";
import {reset} from "./mygulp/tasks/reset.js";
import {html} from "./mygulp/tasks/html.js";
import {server} from './mygulp/tasks/server.js';
import {scss} from './mygulp/tasks/scss.js';
import {js} from './mygulp/tasks/js.js';
import {images} from './mygulp/tasks/images.js';
import {otfToTtf, ttfToWoff, fontsStyle} from './mygulp/tasks/fonts.js';
//import {zip} from './mygulp/tasks/zip.js';
//import {ftp} from './mygulp/tasks/ftp.js';
import {svgSprive} from './mygulp/tasks/svgSprive.js';

//Наблюдатель за изменениями в файлах
function watcher () {
    gulp.watch (path.watch.files, copy);
    gulp.watch (path.watch.html, html);
    gulp.watch (path.watch.scss, scss);
    gulp.watch (path.watch.js, js);
    gulp.watch (path.watch.img, images);
}

export { svgSprive }

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

const mainTasks = gulp.series(fonts, gulp.parallel(copy, otfToTtf, html, scss, js, images));

//Построение сценариев выполнени задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
//const deployZIP = gulp.series(reset, mainTasks, zip);
//const deployFTP = gulp.series(reset, mainTasks, ftp);

//export {deployZIP}
//export {deployFTP}

//Віполнение сценария по умолчанию
gulp.task('default',  dev);

const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});
