// src/lib/pendulum.ts
import { gsap } from 'gsap';

/**
 * Svelte action untuk membuat efek "papan berporos" seperti pendulum.
 *
 * @example
 * ```svelte
 * <script>
 *   import { pendulum } from 'svelte-gsap-pendulum';
 * </script>
 *
 * <a>
 *   <span use:pendulum={{ angle: -25, stiffness: 0.4 }}>Dev</span>
 * </a>
 * ```
 *
 * @param node - Elemen target (biasanya <span>)
 * @param options - Opsi animasi
 * @returns Function cleanup otomatis saat unmount
 */
export function pendulum(
	node: HTMLElement,
	options: {
		/** Sudut rotasi maksimal (derajat negatif = jatuh ke kiri) */
		angle?: number;
		/** Durasi animasi awal (detik) */
		duration?: number;
		/** Kelenturan saat hover (0–1 = makin kaku) */
		stiffness?: number;
		/** Posisi poros rotasi */
		origin?: string;
	} = {}
) {
	const {
		angle = -25,
		duration = 1.2,
		stiffness = 0.5,
		origin = 'bottom right',
	} = options;

	node.style.transformOrigin = origin;

	// Efek jatuh awal (simulasi papan lepas baut)
	gsap.fromTo(
		node,
		{ rotate: 0 },
		{
			rotate: angle,
			duration,
			ease: 'bounce.out',
		}
	);

	// Hover interaksi lembut
	function onEnter() {
		gsap.to(node, {
			rotate: 0,
			duration: 0.5,
			ease: `elastic.out(1, ${stiffness})`,
		});
	}

	function onLeave() {
		gsap.to(node, {
			rotate: angle,
			duration: 0.8,
			ease: `elastic.out(1, ${stiffness})`,
		});
	}

	node.addEventListener('mouseenter', onEnter);
	node.addEventListener('mouseleave', onLeave);

	return {
		destroy() {
			node.removeEventListener('mouseenter', onEnter);
			node.removeEventListener('mouseleave', onLeave);
		},
	};
}
