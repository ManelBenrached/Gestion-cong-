<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' => '\App\Http\Controllers',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('register', 'AuthController@register');
    Route::get('me', 'AuthController@me');
});
Route::group([

    'middleware' => 'api',
    'prefix' => 'conges',
    'namespace' => '\App\Http\Controllers',

], function ($router) {
Route::get('/list_conges_user_connect','DemandeController@getAllCongesByUserConnect');
Route::post('', 'DemandeController@create');
Route::get('', 'DemandeController@getListConges');
Route::get('/{id}', 'DemandeController@getCongeById');
Route::put('/{id}', 'DemandeController@update');
Route::delete('/{id}','DemandeController@delete');
Route::put('/{id}/change_status','DemandeController@changeStatus');
});