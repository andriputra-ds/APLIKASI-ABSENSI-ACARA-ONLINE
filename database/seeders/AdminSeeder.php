<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\admin;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        admin::create([
            'username' => 'admin',
            'password' => 'password123',
            'is_Admin' => 1,
        ]);
        
        admin::create([
            'username' => 'superadmin',
            'password' => 'superadmin123',
            'is_Admin' => 1,
        ]);
    }
}
