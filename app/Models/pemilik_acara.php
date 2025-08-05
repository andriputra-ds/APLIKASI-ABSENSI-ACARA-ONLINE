<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pemilik_acara extends Model
{
    protected $table = 'pemilik_acara';
    protected $primaryKey = 'id_pemilik_acara';
    protected $fillable = [
        'nama_pemilik_acara',
        'email',
        'password',
        'is_Pemilik_acara',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'password' => 'hashed',
    ];
    
    // Relasi ke acara
    public function acara()
    {
        return $this->hasMany(Acara::class, 'id_pemilik_acara', 'id_pemilik_acara');
    }
    
    // Relasi ke grup
    public function grup()
    {
        return $this->hasMany(Grup::class, 'id_pemilik_acara', 'id_pemilik_acara');
    }

    //
}
