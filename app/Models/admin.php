<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class admin extends Model
{
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
    ];

    //
}
