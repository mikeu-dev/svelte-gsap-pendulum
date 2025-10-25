<!-- src/routes/docs/+page.svelte -->
<script lang="ts">
	import '../app.css';
	import { pendulum } from '../lib/pendulum';
</script>

<svelte:head>
	<title>svelte-gsap-pendulum Documentation</title>
</svelte:head>

<main class="p-8 max-w-4xl mx-auto">
	<h1 class="text-4xl font-bold mb-4">svelte-gsap-pendulum</h1>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-2">Deskripsi</h2>
		<p>
			Package ini memberikan efek "pendulum" untuk elemen span, sehingga terlihat seperti papan yang
			digantung oleh satu baut. Bisa digunakan di navbar, heading, atau teks apapun.
		</p>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-2">Instalasi</h2>
		<pre class="bg-gray-100 p-4 rounded">
npm install svelte-gsap-pendulum
    </pre>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-2">Contoh Penggunaan</h2>
		<pre class="bg-gray-100 p-4 rounded">
&lt;script&gt;
  import {pendulum} from 'svelte-gsap-pendulum';
&lt;/script&gt;

&lt;a href="/" class="flex items-center gap-2"&gt;
  Mikeu
  &lt;span use:pendulum={{ angle: -25, stiffness: 0.4 }} 
        class="bg-teal-600 text-white px-4 py-1 rounded"&gt;Dev&lt;/span&gt;
&lt;/a&gt;
    </pre>
	</section>

	<section class="mb-8">
		<h2 class="text-2xl font-semibold mb-2">Demo Interaktif</h2>
		<div class="flex items-center gap-2 mt-4">
			<a href="/" class="flex items-center gap-2 text-lg font-bold cursor-pointer">
				Mikeu
				<span
					use:pendulum={{ angle: -25, stiffness: 0.4 }}
					class="inline-block bg-teal-600 text-white px-4 py-1 rounded"
				>
					Dev
				</span>
			</a>
		</div>
		<p class="mt-2 text-gray-600">Hover pada teks <code>Dev</code> untuk melihat efek pendulum.</p>
	</section>
</main>

<style>
	main {
		font-family: system-ui, sans-serif;
	}
</style>
