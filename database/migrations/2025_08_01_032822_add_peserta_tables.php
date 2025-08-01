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
        Schema::create('peserta', function (Blueprint $table) {
            $table->id('id_peserta');
            $table->string('nama_peserta', 100);
            $table->unsignedBigInteger('id_acara');
            $table->timestamps();

            $table->foreign('id_acara')
                  ->references('id_acara')
                  ->on('acara')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peserta');
        //
    }
};
