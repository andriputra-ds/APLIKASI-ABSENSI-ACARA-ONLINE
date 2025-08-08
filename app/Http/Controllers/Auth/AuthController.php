<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{
    /**
     * Tampilkan halaman login
     */
    public function showLogin(): Response
    {
        return Inertia::render('auth/login-user', [
            'canResetPassword' => false,
            'status' => session('status'),
        ]);
    }
    public function showRegister(): Response
    {
        return Inertia::render('auth/register-user');
    }

    /**
     * Proses registrasi user
     */
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|unique:users,username',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = \App\Models\User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        Auth::login($user);

        return redirect('/dashboard');
    }

    /**
     * Proses login admin
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
    

        $credentials = [
            'username' => $request->username,
            'password' => $request->password
        ];

        if (Auth::guard('admin')->attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            return redirect()->intended('/admin/dashboard');
        }
        if (Auth::guard('PengelolaAcara')->attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            return redirect()->intended('/pengelola/dashboard');
        }

        throw ValidationException::withMessages([
            'username' => 'Username atau password salah.',
        ]);
    }

    /**
     * Logout admin
     */
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/login');
    }


}
