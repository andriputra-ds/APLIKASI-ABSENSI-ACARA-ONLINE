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

// Protected Routes - perlu login admin
Route::middleware(['auth:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard', [
            'user' => auth('admin')->user(),
            'stats' => [
                'total_events' => \App\Models\Acara::count(),
                'total_participants' => \App\Models\Peserta::count(),
                'total_attendance' => \App\Models\Absensi::count(),
            ]
        ]);
    })->name('admin.dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
