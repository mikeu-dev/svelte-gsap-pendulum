# Svelte GSAP Pendulum

Efek **"papan berporos satu baut"** menggunakan GSAP untuk Svelte 5.

---

## 🚀 Instalasi

```bash
npm add svelte-gsap-pendulum gsap
```

---

## 🧩 Penggunaan

```svelte
<script>
	import { pendulum } from 'svelte-gsap-pendulum';
</script>

<a class="flex items-center gap-2 text-5xl font-bold">
	Purwakarta
	<span
		use:pendulum={{ angle: -30, stiffness: 0.45 }}
		class="text-teal-500 origin-bottom-right"
	>
		Tanggap
	</span>
</a>
```

---

## ⚙️ Opsi Action

| Nama | Tipe | Default | Deskripsi |
|------|------|----------|------------|
| `angle` | `number` | `-25` | Sudut rotasi maksimum (negatif = jatuh ke kiri) |
| `duration` | `number` | `1.2` | Durasi efek jatuh awal |
| `stiffness` | `number` | `0.5` | Elastisitas hover (0–1 makin kaku) |
| `origin` | `string` | `'bottom right'` | Titik poros rotasi |

---

## 🧠 Konsep

Action ini mensimulasikan sebuah papan yang hanya tersisa satu baut di ujung kanan bawah.
Saat halaman dimuat, papan akan jatuh ke bawah dengan efek fisika ringan.
Ketika dihover, papan berayun kembali ke posisi horizontal.

---

## 📜 Lisensi

MIT © Mikeu Dev
