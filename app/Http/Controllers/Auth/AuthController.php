<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use  app\Models\Admin;      
use app\Models\PengelolaAcara;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    
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


    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|string|unique:pemilik_acara,username',
            'email' => 'required|email|unique:pemilik_acara,email',
            'password' => 'required|string|min:8|confirmed',
            
        ]);


        $id = DB::table('pemilik_acara')->insert([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_Pemilik_acara' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);


        return redirect()->route('login')
        ->with('status', 'Registrasi berhasil, silakan login dengan username dan password anda.');
    }


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
            
            return redirect('/admin/dashboard');
        }
        if (Auth::guard('PengelolaAcara')->attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            return redirect('/pengelola/dashboard');
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
        Auth::guard('PengelolaAcara')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();
        
        return redirect('/login');
    }


}
