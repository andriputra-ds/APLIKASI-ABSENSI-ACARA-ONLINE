<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// Auth Routes
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login'])->name('user.login');
Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register'])->name('register.submit');

Route::middleware(['auth:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('admin/dashboard');
    })->name('admin.dashboard');
});

Route::middleware(['auth:PengelolaAcara'])->prefix('pengelola')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('pengelola/dashboard');
    })->name('pengelola.dashboard');
    Route::get('/acara', function () {
        return Inertia::render('pengelola/acara');
    })->name('pengelola.acara');

});

Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
