<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    protected $table = 'absensi';
    protected $primaryKey = 'id_absensi';
    protected $fillable = [
        'id_peserta',
        'id_acara',
        'waktu_absen',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    
    protected $casts = [
        'waktu_absen' => 'datetime',
    ];
    
    // Relasi ke peserta
    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'id_peserta', 'id_peserta');
    }
    
    // Relasi ke acara
    public function acara()
    {
        return $this->belongsTo(Acara::class, 'id_acara', 'id_acara');
    }


    //
}
