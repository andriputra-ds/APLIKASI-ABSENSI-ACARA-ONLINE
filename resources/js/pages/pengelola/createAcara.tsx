import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function CreateAcara() {
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    <>
      <Head title="Buat Acara Baru - MyAbsence" />
      <div className="min-h-screen flex items-center justify-center"
      style={{background: 'linear-gradient(0deg, #FFE958 0%, #E4E2D1 50%)'}}>
        <div className="w-full max-w-2xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Buat Acara Baru</h2>
          <p className="text-gray-600 mb-6">Isi detail acara yang akan dibuat</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nama Acara</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-white/80"
                placeholder="Contoh: Seminar Teknologi"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">Tanggal</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-white/80"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1">Waktu</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-white/80"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Lokasi</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-white/80"
                placeholder="Contoh: Aula Kampus"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Deskripsi</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:outline-none bg-white/80"
                placeholder="Deskripsi singkat acara"
                rows={3}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-semibold py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition-all">
                Simpan Acara
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}