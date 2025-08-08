import React, { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent} from '@/components/ui/card';

interface LoginProps {
    canResetPassword: boolean;
    status?: string;
}

export default function Login({ canResetPassword, status }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('admin.login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Login - MyAbsence" />

            <div className="min-h-screen flex border-t border-gray-200 bg-gray-50">
                {/* bagian kiri - Login Form */}
                <div
                    className="flex-1 flex items-center justify-center p-8"
                    style={{
                        background: 'linear-gradient(0deg, #FFE958 0%, #E4E2D1 100%)'
                    }}
                >
                    <div className="w-full max-w-md space-y-8">
                        {/* Logo dan Header */}
                        <div className="text-center">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/30">
                                    <img 
                                        src="/myabsence.svg" 
                                        alt="MyAbsence Logo" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-3 drop-shadow-sm">
                                Halo Selamat Datang
                            </h1>
                            <p className="text-gray-800 text-xl font-medium box-border drop-shadow-md">
                                Di MyAbsence
                            </p>
                        </div>

                        {/* Form Login */}
                        <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border-0 ring-1 ring-white/20"
                            style={{ borderRadius: '15px' }}>
                            <CardContent className="p-10">
                                {status && (
                                    <div className="mb-6 font-medium text-sm text-emerald-700 bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                                        {status}
                                    </div>
                                )}

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
                                            autoFocus
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
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                        />
                                        {errors.password && (
                                            <div className="mt-3 text-sm text-red-600 bg-red-50 p-3 rounded-xl">
                                                {errors.password}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center space-x-3">
                                            <Checkbox
                                                id="remember"
                                                checked={data.remember}
                                                onCheckedChange={(checked) => 
                                                    setData('remember', checked as boolean)
                                                }
                                                className="w-5 h-5 rounded-lg"
                                            />
                                            <Label htmlFor="remember" className="text-base text-gray-700 font-medium cursor-pointer">
                                                Ingat saya
                                            </Label>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-gray-600 mb-1">Belum Punya Akun?</p>
                                            <a href={route('register')} className="text-base text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
                                                Daftar Disini
                                            </a>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full h-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-black hover:via-gray-900 hover:to-black text-white font-bold text-lg rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-3xl active:scale-[0.98] disabled:opacity-70"
                                        disabled={processing}
                                    >
                                        {processing ? (
                                            <div className="flex items-center space-x-3">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Sedang masuk...</span>
                                            </div>
                                        ) : 'Masuk'}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* bagian kanan - Illustration */}
                <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-white/10 via-gray-50/20 to-gray-100/30 backdrop-blur-xl border-l border-white/20" style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)'
                }}>
                    <div className="text-center">
                        <div className="w-80 h-80 mx-auto mb-12 relative">
                            {/* Illustration Container */}
                            <div className="w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden border-4 border-white/20">
                                {/* foto login*/}
                                <img 
                                    src="/login.png" 
                                    alt="login Logo" 
                                    className="w-full h-full object-contain"
                                />
                              
                            </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-lg">
                            Kelola Absensi dengan<br />
                            <span className="text-yellow-600">Mudah & Efisien</span>
                        </h2>
                        <p className="text-gray-700 text-lg max-w-lg mx-auto leading-relaxed drop-shadow-md">
                            Sistem absensi digital yang membantu Anda mengelola kehadiran peserta acara dengan 
                            <span className="text-gray-900 font-semibold"> teknologi modern</span> dan 
                            <span className="text-yellow-600 font-semibold"> real-time monitoring</span>.
                        </p>
                        
                        {/* Icons interaktif */}
                        <div className="flex justify-center space-x-8 mt-12">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L2 7V10C2 16 6 20.9 12 22C18 20.9 22 16 22 10V7L12 2Z"/>
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Secure</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Real-time</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9,11H7V9H9V11M13,11H11V9H13V11M17,11H15V9H17V11M19,3H18V1H16V3H8V1H6V3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-600 font-medium">Easy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
