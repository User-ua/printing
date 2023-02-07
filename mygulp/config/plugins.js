import replace from "gulp-replace"; // поиск и замена абривиатур
import browsersync from "browser-sync"; //Локальный сервер
import notify from "gulp-notify"//сообщения
import plumber from "gulp-plumber"//обработка ошибок


export const plugins = {
    replace: replace,
    browsersync: browsersync,
    notify: notify,
    plumber: plumber,
}