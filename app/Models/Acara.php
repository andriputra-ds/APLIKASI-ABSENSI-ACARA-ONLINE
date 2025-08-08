<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Acara extends Model
{
    protected $table = 'acara';
    protected $primaryKey = 'id_acara';
    protected $fillable = [
        'nama_acara',
        'deskripsi_acara',
        'waktu_mulai',
        'waktu_selesai',
        'id_pemilik_acara',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    protected $casts = [
        'waktu_mulai' => 'datetime',
        'waktu_selesai' => 'datetime',
    ];
    
    // Relasi ke pemilik acara
    public function pemilikAcara()
    {
        return $this->belongsTo(PemilikAcara::class, 'id_pemilik_acara', 'id_pemilik_acara');
    }
    
    // Relasi ke peserta
    public function peserta()
    {
        return $this->hasMany(Peserta::class, 'id_acara', 'id_acara');
    }
    
    // Relasi ke absensi
    public function absensi()
    {
        return $this->hasMany(Absensi::class, 'id_acara', 'id_acara');
    }

    //
}
