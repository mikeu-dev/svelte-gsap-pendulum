# 🎯 Svelte GSAP Pendulum

[![npm version](https://img.shields.io/npm/v/svelte-gsap-pendulum?color=teal)](https://www.npmjs.com/package/svelte-gsap-pendulum)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte)](https://svelte.dev/)

Efek animasi **"papan berporos satu baut"** yang hidup dan interaktif menggunakan GSAP untuk Svelte 5. Berikan sentuhan fisika yang unik pada UI Anda hanya dengan satu baris kode!

## 🎮 [Demo Live](https://svelte-gsap-pendulum.vercel.app/)

**[→ Coba Demo Interaktif](https://svelte-gsap-pendulum.vercel.app/)** - Eksperimen dengan semua parameter secara real-time!

## ✨ Fitur

- 🎨 **Plug & Play** - Cukup `use:pendulum` dan langsung jalan
- ⚡ **Performa Tinggi** - Ditenagai oleh GSAP untuk animasi yang smooth
- 🎛️ **Fully Customizable** - Kontrol penuh atas sudut, durasi, kekakuan, dan titik poros
- 🪶 **Ringan** - Tanpa dependensi tambahan selain GSAP
- 🔥 **Svelte 5 Native** - Dibangun khusus untuk Svelte 5 dengan Runes API
- 📱 **Responsive** - Bekerja sempurna di semua ukuran layar

---

## 🚀 Instalasi

```bash
npm add svelte-gsap-pendulum gsap
```

atau dengan package manager lain:

```bash
# pnpm
pnpm add svelte-gsap-pendulum gsap

# yarn
yarn add svelte-gsap-pendulum gsap

# bun
bun add svelte-gsap-pendulum gsap
```

---

## 🧩 Penggunaan Dasar

```svelte
<script>
	import { pendulum } from 'svelte-gsap-pendulum';
</script>

<div use:pendulum>
	Gerakkan saya!
</div>
```

### Dengan Konfigurasi

```svelte
<script>
	import { pendulum } from 'svelte-gsap-pendulum';
</script>

<a class="flex items-center gap-2 text-5xl font-bold">
	Purwakarta
	<span
		use:pendulum={{ angle: -30, stiffness: 0.45, duration: 1.5 }}
		class="text-teal-500"
	>
		Tanggap
	</span>
</a>
```

---

## ⚙️ Opsi Konfigurasi

| Parameter | Tipe | Default | Deskripsi |
|-----------|------|---------|-----------|
| `angle` | `number` | `-25` | Sudut rotasi maksimum dalam derajat (negatif = jatuh ke kiri, positif = jatuh ke kanan) |
| `duration` | `number` | `1.2` | Durasi animasi jatuh awal dalam detik |
| `stiffness` | `number` | `0.5` | Elastisitas saat hover (0 = sangat elastis, 1 = sangat kaku) |
| `origin` | `string` | `'bottom right'` | Titik poros rotasi CSS transform-origin (contoh: `'top left'`, `'center center'`) |

### Contoh Variasi

```svelte
<!-- Jatuh ke kanan dengan efek lebih elastis -->
<div use:pendulum={{ angle: 30, stiffness: 0.2 }}>
	Elastis
</div>

<!-- Jatuh lambat dengan poros di tengah -->
<div use:pendulum={{ angle: -45, duration: 2.5, origin: 'center center' }}>
	Lambat
</div>

<!-- Efek kaku dengan poros kiri atas -->
<div use:pendulum={{ angle: -60, stiffness: 0.9, origin: 'top left' }}>
	Kaku
</div>
```

---

## 🧠 Konsep

Action ini mensimulasikan sebuah papan yang hanya tersisa **satu baut** di salah satu ujungnya. 

**Perilaku:**
1. 📉 Saat halaman dimuat, elemen akan "jatuh" dengan efek fisika ringan
2. 🎯 Ketika di-hover, elemen berayun kembali ke posisi horizontal
3. 🔄 Saat hover dilepas, elemen kembali jatuh dengan smooth

Efek ini sempurna untuk:
- Hero text yang eye-catching
- Call-to-action buttons
- Navigation items
- Logo dan branding elements
- Micro-interactions yang memorable

---

## 🎮 Demo Interaktif

Clone repository ini dan jalankan demo lokal untuk bereksperimen dengan berbagai konfigurasi:

```bash
git clone https://github.com/mikeu-dev/svelte-gsap-pendulum.git
cd svelte-gsap-pendulum
npm install
npm run dev
```

Demo akan tersedia di `http://localhost:5173` dengan kontrol interaktif untuk semua parameter.

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server dengan demo
npm run dev

# Build library
npm run build

# Run tests
npm test

# Lint & format
npm run lint
npm run format
```

---

## 📦 Build & Publish

Library ini menggunakan `@sveltejs/package` untuk packaging:

```bash
# Build package
npm run build

# Package akan tersedia di folder /dist
```

---

## 🤝 Contributing

Kontribusi sangat diterima! Silakan buat issue atau pull request di [GitHub repository](https://github.com/mikeu-dev/svelte-gsap-pendulum).

---

## 📜 Lisensi

MIT © [Mikeu Dev](https://github.com/mikeu-dev)

---

## 🙏 Credits

- Dibangun dengan [Svelte 5](https://svelte.dev/)
- Animasi oleh [GSAP](https://greensock.com/gsap/)
- Dibuat dengan ❤️ untuk komunitas Svelte & GSAP
