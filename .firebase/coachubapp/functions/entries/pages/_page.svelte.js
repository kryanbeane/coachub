import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container mx-auto p-8 space-y-8"><h1 class="h1" data-svelte-h="svelte-18kp8kh">Hello Skeleton</h1> <p data-svelte-h="svelte-1fr5lu1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> <section><a class="btn variant-filled-primary" href="https://kit.svelte.dev/" data-svelte-h="svelte-1vygb6l">SvelteKit</a> <a class="btn variant-filled-secondary" href="https://tailwindcss.com/" data-svelte-h="svelte-1gak3za">Tailwind</a> <a class="btn variant-filled-tertiary" href="https://github.com/" data-svelte-h="svelte-mcrrmv">GitHub</a></section></div>`;
});
export {
  Page as default
};
