<?php

use Illuminate\Http\Request;

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

Route::group([],function(){
    Route::post('login', 'Api\AuthController@login');
    Route::post('register', 'Api\AuthController@register');
    Route::post('checktoken', 'Api\AuthController@check');    
});

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/contato', 'ContatoController@index')->name('contato.index');
    Route::get('/contato/{id}', 'ContatoController@show')->name('contato.show');
    Route::post('/contato', 'ContatoController@store')->name('contato.store');
    Route::put('/contato/{id}', 'ContatoController@update')->name('contato.update');
    Route::delete('/contato/{id}', 'ContatoController@delete')->name('contato.delete');
});