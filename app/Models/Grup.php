<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grup extends Model
{
    protected $table = 'grup';
    protected $primaryKey = 'id_grup';
    protected $fillable = [
        'nama_grup',
        'id_pemilik_acara',
    ];
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
    
    // Relasi ke pemilik acara
    public function pemilikAcara()
    {
        return $this->belongsTo(PemilikAcara::class, 'id_pemilik_acara', 'id_pemilik_acara');
    }

    //
}
