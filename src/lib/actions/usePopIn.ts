let gsap: any;
let ScrollTrigger: any;
let registered = false;

export function usePopIn(node: HTMLElement) {
    if (typeof window === 'undefined') return;

    // Dynamically import only once
    (async () => {
        if (!gsap || !ScrollTrigger) {
            const gsapModule = await import('gsap');
            const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');
            gsap = gsapModule.gsap || gsapModule.default;
            ScrollTrigger = scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
        }

        if (!registered) {
            gsap.registerPlugin(ScrollTrigger);
            registered = true;
        }

        gsap.fromTo(
            node,
            { opacity: 0, y: 50, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: node,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    })();

    return {
        destroy() {
            if (ScrollTrigger) {
                ScrollTrigger.getAll().forEach((trigger: any) => {
                    if (trigger.trigger === node) trigger.kill();
                });
            }
        }
    };
}
