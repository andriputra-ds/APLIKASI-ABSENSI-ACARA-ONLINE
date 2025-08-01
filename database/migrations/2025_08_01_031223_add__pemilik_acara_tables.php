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
        Schema::create('pemilik_acara',function (Blueprint $table){
            $table->id('id_pemilik_acara');
            $table->string('nama_pemilik_acara', 100);
            $table->string('email',100)->unique();
            $table->string('password', 255);
            $table->tinyInteger('is_Pemilik_acara')->default(0);
            $table->timestamps();
        });
        //
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemilik_acara');
        //
    }
};
