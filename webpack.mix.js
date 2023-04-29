const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/dealer/js/app.js', 'public/dealer/js')
    .js('resources/posp/js/app.js', 'public/posp/js')
    .js('resources/ascentia/js/app.js', 'public/ascentia/js')
    .sass('resources/posp/sass/app.scss', 'public/posp/css')
    .sass('resources/dealer/sass/app.scss', 'public/dealer/css')
    .sass('resources/ascentia/sass/app.scss', 'public/ascentia/css');
    mix.browserSync('http://127.0.0.1:8000');

    