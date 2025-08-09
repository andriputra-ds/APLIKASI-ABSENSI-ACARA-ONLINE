<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('pemilik_acara', function (Blueprint $table) {
            $table->renameColumn('nama_pemilik_acara', 'username');
        });
    }

    public function down()
    {
        Schema::table('pemilik_acara', function (Blueprint $table) {
            $table->renameColumn('username', 'nama_pemilik_acara');
        });
    }
};