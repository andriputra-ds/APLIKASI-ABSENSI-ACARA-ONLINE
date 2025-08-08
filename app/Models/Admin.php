<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Admin extends Authenticatable
{
    use HasFactory;
    
    protected $table = 'admin'; 
    protected $primaryKey = 'id_admin';
    
    protected $fillable = [
        'username',
        'password',
        'is_Admin',
    ];
    
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
        'is_Admin' => 'boolean',
    ];
}
