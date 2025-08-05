<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class peserta extends Model
{
    protected $table = 'peserta';
    protected $primaryKey = 'id_peserta';
    protected $fillable = [
        'nama_peserta',
        'id_acara',
    ];
    
    // Relasi ke tabel acara
    public function acara()
    {
        return $this->belongsTo(Acara::class, 'id_acara', 'id_acara');
    }
    
    // Relasi ke absensi
    public function absensi()
    {
        return $this->hasMany(Absensi::class, 'id_peserta', 'id_peserta');
    }

    //
}
