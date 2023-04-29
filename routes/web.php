<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/{page?}/{page1?}/{page2?}/{page3?}', [HomeController::class, 'index']);
// Route::post('/{page?}/{page1?}/{page2?}/{page3?}', function () {
//     return view('welcome');
// });