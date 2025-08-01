<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('acara', function (Blueprint $table) {
            $table->id('id_acara');
            $table->string('nama_acara', 100);
            $table->datetime('waktu_mulai');
            $table->datetime('waktu_selesai');
            $table->text('deskripsi_acara');
            $table->unsignedBigInteger('id_pemilik_acara');
            $table->timestamps();

    
            $table->foreign('id_pemilik_acara')
                  ->references('id_pemilik_acara')
                  ->on('pemilik_acara')
                  ->onDelete('cascade');
        });
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acara');
        //
    }
};
