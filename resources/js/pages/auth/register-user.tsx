import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        password_confirmation: '',
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register.submit'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register - MyAbsence" />
            <div className="min-h-screen flex bg-gray-50">
                {/* bagian kiri gambar */}
                <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-white/20 backdrop-blur-xl border-r border-white/30">
                    <div className="text-center">
                        <img src="/register.png" alt="Register Illustration" className="max-w-md w-full mb-8 animate-fade-in" />
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bergabunglah Sekarang!</h2>
                        <p className="text-gray-700 text-base mb-8">Nikmati kemudahan absensi digital bersama MyAbsence.</p>
                        <div className="flex flex-col items-center space-y-3 mt-8">
                            <a
                                href={route('login')}
                                className="flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-yellow-400 font-semibold shadow-lg hover:from-black hover:via-gray-900 hover:to-black hover:scale-105 transition-all duration-200"
                            >
                                <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                Sudah punya akun? <span className="underline ml-1">Masuk</span>
                            </a>
                            <a
                                href="/forgot-password"
                                className="flex items-center px-4 py-2 rounded-xl bg-white/80 text-gray-800 font-semibold shadow hover:bg-yellow-100 hover:text-yellow-700 hover:scale-105 transition-all duration-200"
                            >
                                <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-4a4 4 0 00-4 4v2a4 4 0 008 0v-2a4 4 0 00-4-4z" />
                                </svg>
                                Lupa password?
                            </a>
                        </div>
                    </div>
                </div>
                {/* bagian kanan: Form Register */}
                <div
                    className="flex-1 flex items-center justify-center p-8 min-h-screen"
                    style={{
                        background: 'linear-gradient(0deg, #FFE958 0%, #E4E2D1 100%)'
                    }}
                >
                    <div className="w-full max-w-md space-y-8">
                        {/* Logo dan Header */}
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                                    <img
                                        src="/myabsence.svg"
                                        alt="MyAbsence Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                                Mari Daftar Terlebih Dahulu
                            </h1>
                            <p className="text-gray-800 text-xl font-medium box-border drop-shadow-md">
                                Di MyAbsence
                            </p>
                        </div>
                        {/* Form Register */}
                        <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20"
                            style={{ borderRadius: '15px' }}>
                            <CardContent className="p-10">
                                <form onSubmit={submit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="username" className="text-gray-800 font-semibold text-base">
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            type="text"
                                            name="username"
                                            value={data.username}
                                            className="mt-3 h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl text-base font-medium placeholder:text-gray-400 transition-all duration-200"
                                            placeholder="Masukkan username Anda"
                                            autoComplete="username"
                                            onChange={(e) => setData('username', e.target.value)}
                                            required
                                        />
                                        {errors.username && (
                                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-xl">
                                                {errors.username}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-gray-800 font-semibold text-base">
                                            Password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-3 h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl text-base font-medium placeholder:text-gray-400 transition-all duration-200"
                                            placeholder="Masukkan password Anda"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        {errors.password && (
                                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-xl">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password_confirmation" className="text-gray-800 font-semibold text-base">
                                            Konfirmasi password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-3 h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl text-base font-medium placeholder:text-gray-400 transition-all duration-200"
                                            placeholder="Ulangi password Anda"
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                        />
                                        {errors.password_confirmation && (
                                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-xl">
                                                {errors.password_confirmation}
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-800 font-semibold text-base">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-3 h-14 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-2xl text-base font-medium placeholder:text-gray-400 transition-all duration-200"
                                            placeholder="Masukkan email Anda"
                                            autoComplete="email"
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                        />
                                        {errors.email && (
                                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-xl">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full h-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-black hover:via-gray-900 hover:to-black text-yellow-400 font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-3xl active:scale-[0.98] disabled:opacity-70"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <div className="flex items-center space-x-3">
                                                <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                                                <span>Mendaftar...</span>
                                            </div>
                                        ) : 'Daftar'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}