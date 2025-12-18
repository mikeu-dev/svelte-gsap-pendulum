<script lang="ts">
	import '../app.css';
	import { pendulum } from '../lib/pendulum';
	import { untrack } from 'svelte';

	// State untuk demo interaktif
	let angle = $state(-30);
	let stiffness = $state(0.4);
	let duration = $state(1.5);
	let origin = $state('bottom right');

	// Key untuk me-reset animasi saat parameter berubah
	let key = $state(0);

	function refresh() {
		key++;
	}

	const origins = ['top left', 'top right', 'bottom left', 'bottom right', 'center center'];

	const codeSnippet = $derived(
		`
<script>
  import { pendulum } from 'svelte-gsap-pendulum';
<\/script>

<div use:pendulum={{ 
  angle: ${angle}, 
  stiffness: ${stiffness}, 
  duration: ${duration}, 
  origin: '${origin}' 
}}>
  Gerakkan saya!
</div>
	`.trim()
	);

	function copyToClipboard() {
		navigator.clipboard.writeText(codeSnippet);
		alert('Snippet disalin!');
	}
</script>

<svelte:head>
	<title>Svelte GSAP Pendulum | Premium Animation Effect</title>
</svelte:head>

<div class="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-teal-500/30 font-sans">
	<!-- Glassy Header -->
	<header class="sticky top-0 z-50 border-b border-slate-800/50 bg-[#0f172a]/80 backdrop-blur-xl">
		<div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
			<div class="flex items-center gap-3">
				<div
					class="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<span
					class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
				>
					Svelte GSAP Pendulum
				</span>
			</div>

			<div class="flex items-center gap-6 text-sm font-medium text-slate-400">
				<a
					href="https://github.com/mikeu-dev/svelte-gsap-pendulum"
					class="hover:text-white transition-colors">GitHub</a
				>
				<button
					onclick={copyToClipboard}
					class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-full transition-all border border-slate-700"
				>
					Copy Snippet
				</button>
			</div>
		</div>
	</header>

	<main class="max-w-6xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-16 items-start">
		<!-- Left: Controls & Info -->
		<div class="space-y-12">
			<section>
				<h1 class="text-5xl font-extrabold mb-6 leading-tight">
					Efek Pendulum <br />
					<span class="text-teal-400 italic">"Satu Baut"</span> yang Hidup.
				</h1>
				<p class="text-lg text-slate-400 leading-relaxed max-w-lg">
					Library animasi Svelte 5 berbasis GSAP yang memberikan interaksi fisik unik. Cukup satu
					baris <code>use:pendulum</code> untuk menghidupkan UI Anda.
				</p>
			</section>

			<!-- Interactive Controls -->
			<div
				class="p-8 bg-slate-800/30 rounded-3xl border border-slate-800 backdrop-blur-sm space-y-8"
			>
				<h3 class="text-sm font-bold uppercase tracking-widest text-teal-500/80">
					Konfigurasi Live
				</h3>

				<div class="space-y-6">
					<!-- Angle -->
					<div class="space-y-3">
						<div class="flex justify-between text-sm">
							<span class="text-slate-400">Sudut Rotasi (Angle)</span>
							<span class="text-teal-400 font-mono">{angle}°</span>
						</div>
						<input
							type="range"
							bind:value={angle}
							min="-90"
							max="90"
							class="w-full accent-teal-500"
							oninput={refresh}
						/>
					</div>

					<!-- Stiffness -->
					<div class="space-y-3">
						<div class="flex justify-between text-sm">
							<span class="text-slate-400">Kekakuan (Stiffness)</span>
							<span class="text-teal-400 font-mono">{stiffness}</span>
						</div>
						<input
							type="range"
							bind:value={stiffness}
							step="0.1"
							min="0"
							max="1"
							class="w-full accent-teal-500"
							oninput={refresh}
						/>
					</div>

					<!-- Duration -->
					<div class="space-y-3">
						<div class="flex justify-between text-sm">
							<span class="text-slate-400">Durasi Awal</span>
							<span class="text-teal-400 font-mono">{duration}s</span>
						</div>
						<input
							type="range"
							bind:value={duration}
							step="0.1"
							min="0.5"
							max="3"
							class="w-full accent-teal-500"
							oninput={refresh}
						/>
					</div>

					<!-- Origin -->
					<div class="space-y-3">
						<span class="text-sm text-slate-400 block">Titik Poros (Origin)</span>
						<div class="grid grid-cols-2 gap-2">
							{#each origins as op}
								<button
									onclick={() => {
										origin = op;
										refresh();
									}}
									class="px-3 py-2 text-xs rounded-lg border transition-all {origin === op
										? 'bg-teal-500/10 border-teal-500 text-teal-400'
										: 'bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-500'}"
								>
									{op}
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Right: Preview Area -->
		<div class="lg:sticky lg:top-32 space-y-12">
			<div
				class="relative aspect-video flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-800/20 to-teal-900/10 rounded-[2.5rem] border-2 border-slate-800 overflow-hidden group"
			>
				<!-- Grid Background -->
				<div
					class="absolute inset-0 opacity-[0.03] pointer-events-none"
					style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 24px 24px;"
				></div>

				<!-- The Demo Element -->
				{#key key}
					<div
						use:pendulum={{ angle, stiffness, duration, origin }}
						class="relative z-10 bg-white text-[#0f172a] px-12 py-6 rounded-2xl shadow-2xl shadow-teal-500/10 font-black text-4xl cursor-default select-none transition-shadow group-hover:shadow-teal-500/20"
					>
						Pendulum
						<!-- Visual Center of Rotation Indicator -->
						<div
							class="absolute w-2 h-2 bg-teal-500 rounded-full shadow-[0_0_8px_teal]"
							style="
							left: {origin.includes('left') ? '0%' : origin.includes('right') ? '100%' : '50%'};
							top: {origin.includes('top') ? '0%' : origin.includes('bottom') ? '100%' : '50%'};
							transform: translate(-50%, -50%);
						"
						></div>
					</div>
				{/key}

				<div class="mt-12 text-slate-500 text-sm animate-pulse">← Hover elemen di atas →</div>
			</div>

			<!-- Code Snippet -->
			<div class="bg-slate-950 rounded-2xl p-6 border border-slate-800 relative group">
				<div class="flex justify-between items-center mb-4">
					<span
						class="text-xs font-mono text-slate-500 underline decoration-slate-800 underline-offset-4"
						>Usage Example</span
					>
					<button
						onclick={copyToClipboard}
						class="text-xs text-teal-500 hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"
						>Copy</button
					>
				</div>
				<pre class="overflow-x-auto text-[13px] leading-relaxed text-slate-300 font-mono"><code
						>{codeSnippet}</code
					></pre>
			</div>
		</div>
	</main>

	<footer
		class="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 text-center text-sm text-slate-500"
	>
		Dibuat dengan ❤️ untuk komunitas Svelte & GSAP.
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		background: #0f172a;
	}

	/* Custom Range Input Styling */
	input[type='range'] {
		-webkit-appearance: none;
		height: 4px;
		background: rgb(30, 41, 59);
		border-radius: 999px;
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 16px;
		height: 16px;
		background: #2dd4bf;
		border-radius: 50%;
		cursor: pointer;
		box-shadow: 0 0 10px rgba(45, 212, 191, 0.4);
	}
</style>
