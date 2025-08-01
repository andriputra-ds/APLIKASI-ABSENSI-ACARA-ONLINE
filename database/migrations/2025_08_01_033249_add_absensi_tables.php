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
        Schema::create ('absensi',function (Blueprint $table){
            $table->id('id_absensi');
            $table->unsignedBigInteger('id_peserta');
            $table->unsignedBigInteger('id_acara');
            $table->timestamp('waktu_absen')->useCurrent();
            $table->timestamps();

            $table->foreign('id_peserta')
                  ->references('id_peserta')
                  ->on('peserta')
                  ->onDelete('cascade');

            $table->foreign('id_acara')
                  ->references('id_acara')
                  ->on('acara')
                  ->onDelete('cascade');
        });
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
