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
        Schema::create('grup', function (Blueprint $table) {
            $table->id('id_grup');
            $table->string('nama_grup', 100);
            $table->unsignedBigInteger('id_pemilik_acara');
            $table->timestamps();

            $table->foreign('id_pemilik_acara')
                  ->references('id_pemilik_acara')
                  ->on('pemilik_acara')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grup');
    }
};
