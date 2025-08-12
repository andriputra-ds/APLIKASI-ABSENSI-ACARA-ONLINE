import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardProps {
    user?: {
        username: string;
        email: string;
    };
    stats?: {
        total_events: number;
        total_participants: number;
        total_attendance: number;
    };
}

export default function Dashboard({ user, stats }: DashboardProps) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const handleLogout = () => {
        if (confirm('Apakah Anda yakin ingin logout?')) {
            router.post(route('logout'));
        }
    };

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                </svg>
            ),
            href: route('pengelola.dashboard'),
        },
        {
            id: 'events',
            label: 'Kelola Acara',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H18V1H16V3H8V1H6V3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M19 19H5V8H19V19Z"/>
                </svg>
            ),
            href: route('pengelola.acara'),
        },
    
    ];

    return (
        <>
            <Head title="Dashboard Pengelola - MyAbsence" />
            
            <div className="min-h-screen flex"
            style={{
                background: 'linear-gradient(0deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)'
            }}>
                {/* Sidebar */}
                <div
    className={`fixed inset-y-0 left-0 z-50 w-64
    bg-white/60
    backdrop-blur-2xl
    border border-white/30
    shadow-xl
    border-r border-gray-200
    transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}
>
                    {/* Logo Section */}
                    <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200" style={{
                        background: 'linear-gradient(0deg, #FFE958 0%, #E4E2D1 100%)'
                    }}>
                        <div className="flex items-center">
                            <img 
                                src="/myabsence.svg" 
                                alt="MyAbsence Logo" 
                                className="w-12 h-12 object-cover"
                            />
                            <h1 className="ml-3 text-lg font-bold text-gray-900">
                                MyAbsence
                            </h1>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="lg:hidden p-1 rounded-md text-gray-900 hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* User Info */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{
                                background: 'linear-gradient(135deg, #FFE958 0%, #E4E2D1 100%)'
                            }}>
                                <span className="text-gray-900 font-medium text-sm">
                                    {(user?.username || 'P').charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">
                                    {user?.username || 'Pengelola'}
                                </p>
                                <p className="text-xs text-gray-600">
                                    Pengelola Acara
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigasi */}
                    <nav className="mt-6 px-3">
                        <div className="space-y-1">
                            {menuItems.map((item) => (
                                <Link
  href={item.href} 
  key={item.id}
  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-xl transition-all duration-200 group ${
    activeMenu === item.id
      ? 'text-gray-900 shadow-lg'
      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
  }`}
  style={activeMenu === item.id ? {
    background: 'linear-gradient(135deg, #FFE958 0%, #E4E2D1 100%)'
  } : {}}
  onClick={() => setActiveMenu(item.id)}
>
  <span className={`mr-3 ${activeMenu === item.id ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
    {item.icon}
  </span>
  {item.label}
</Link>
                            ))}
                        </div>
                    </nav>

                    {/* Logout Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200">
                        <Button
                            onClick={handleLogout}
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-3 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
                        >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 17V14H9V10H16V7L21 12L16 17M14 2A2 2 0 0 1 16 4V6H14V4H5V20H14V18H16V20A2 2 0 0 1 14 22H5A2 2 0 0 1 3 20V4A2 2 0 0 1 5 2H14Z"/>
                            </svg>
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col lg:ml-0">
                    {/* Mobile Header */}
                    <div className="lg:hidden bg-white shadow-sm border-b">
                        <div className="flex items-center justify-between h-16 px-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            <h1 className="text-lg font-semibold text-gray-900">
                                Dashboard Pengelola
                            </h1>
                            <div className="w-10"></div>
                        </div>
                    </div>

                    {/* Desktop Header */}
                    <div className="hidden lg:block bg-white shadow-sm border-b">
                        <div className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                {/* Kiri: Icon dan Judul */}
                                <div className="flex items-center">
                                    <span className="mr-4 flex items-center justify-center">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                                        </svg>
                                    </span>
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                                        <p className="text-sm text-gray-600 mt-1">Selamat datang kembali, kelola acara dan absensi dengan mudah</p>
                                    </div>
                                </div>
                                {/* Kanan: User Info */}
                                <div className="flex items-center space-x-3">
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">
                                            {user?.username || 'Pengelola'}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {user?.email || 'pengelola@myabsence.com'}
                                        </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white font-bold text-lg ml-2">
                                        {(user?.username || 'P').charAt(0).toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-6">
                            {/* Hero */}
                            <div 
                                className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 rounded-3xl p-8 mb-8 relative overflow-hidden border border-gray-100"
                                style={{
                                    background: 'linear-gradient(100deg, #FFE958 0%, #E4E2D1 55%)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex flex-col justify-center h-full">
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 drop-shadow-sm">
                                                Halo Pengelola Acara
                                            </h2>
                                            <p className="text-gray-700 text-lg max-w-md">
                                                Selamat datang di dashboard, kelola acara dan absensi dengan mudah
                                            </p>
                                        </div>
                                    </div>
                                    {/* Profile Image */}
                                    <div className="hidden lg:flex items-center justify-center">
                                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"/>
                                            </svg>
                                        </div>
                                        <img src='/pengelola.png'
                                            alt="Admin Illustration"
                                            className="w-48 h-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center m-3">
    <h3 className="text-2xl font-bold text-gray-900">Statistik Acara</h3>
    <p className="text-gray-600 mt-1">Jumlah detail semua acara yang telah dibuat</p>
  </div>

                            {/* Statistics Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {/* total_acara */}
                                <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <CardContent className="p-6 relative">
                                        <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                                            <img src="/acara.svg" alt="Acara" className="w-12 h-12" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Total Acara Anda</h4>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">{stats?.total_events ?? 100}</div>
                                       
                                    </CardContent>
                                </Card>
                                {/* total_peserta*/}
                                <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <CardContent className="p-6 relative">
                                        <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                                            <img src="/participants.svg" alt="Peserta" className="w-12 h-12" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Total Peserta Anda</h4>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">{stats?.total_participants ?? 500}</div>
                                        
                                    </CardContent>
                                </Card>
                                {/* total_grup*/}
                                <Card className="bg-white rounded-3xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                    <CardContent className="p-6 relative">
                                        <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                                            <img src="/grup.svg" alt="Grup" className="w-12 h-12" />
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Total Grup Acara Anda</h4>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">{stats?.total_attendance ?? 100}</div>
                                    
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Footer */}
                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="flex items-center mb-4 md:mb-0">
                                        <img 
                                            src="/myabsence.svg" 
                                            alt="MyAbsence Logo" 
                                            className="h w-8 mr-3"
                                        />
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">MyAbsence</h3>
                                            <p className="text-xs text-gray-500">Dibuat dengan ❤️ oleh andriputra-ds</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center space-x-4">
                                        <p className="text-sm text-gray-600 mr-4">2025 MyAbsence</p>
                                        {/* Social Links */}
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557C23.117 4.949 22.168 5.213 21.172 5.332C22.189 4.723 22.97 3.758 23.337 2.608C22.386 3.172 21.332 3.582 20.21 3.803C19.313 2.846 18.032 2.248 16.616 2.248C13.437 2.248 11.101 5.214 11.819 8.293C7.728 8.088 4.1 6.128 1.671 3.149C0.381 5.362 1.002 8.257 3.194 9.723C2.388 9.697 1.628 9.476 0.965 9.107C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.106C22.505 6.411 23.34 5.544 24 4.557Z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.366C3.274 4.224 4.194 3.298 5.337 3.298C6.477 3.298 7.401 4.224 7.401 5.366C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
                                            </svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987C.029 17.396 3.904 21.989 9.077 23.165C9.077 22.306 9.077 21.052 9.313 20.154C9.57 19.13 10.805 14.669 10.805 14.669S10.529 14.118 10.529 13.262C10.529 11.845 11.362 10.787 12.406 10.787C13.287 10.787 13.704 11.428 13.704 12.205C13.704 13.073 13.131 14.389 12.829 15.594C12.577 16.547 13.251 17.323 14.182 17.323C15.865 17.323 17.045 15.175 17.045 12.612C17.045 10.524 15.653 9.122 12.121 9.122C8.246 9.122 5.856 11.834 5.856 14.213C5.856 15.115 6.178 15.856 6.718 16.373C6.837 16.503 6.851 16.62 6.816 16.764C6.745 17.077 6.589 17.658 6.548 17.806C6.492 18.007 6.351 18.062 6.139 17.953C4.908 17.421 4.235 15.947 4.235 13.989C4.235 10.717 6.765 7.729 12.452 7.729C16.928 7.729 19.998 10.446 19.998 12.907C19.998 16.857 17.522 19.783 14.077 19.783C13.108 19.783 12.198 19.273 11.884 18.672C11.884 18.672 11.374 20.597 11.244 21.109C10.982 22.086 10.398 23.165 10.001 23.811C10.911 24.105 11.884 24.264 12.892 24.264C19.513 24.264 24.88 18.897 24.88 12.277C24.88 5.657 19.513.29 12.892.29L12.017 0Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

          
                {sidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </div>
        </>
        );
    }
