

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clients/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.e499660f.js","_app/immutable/chunks/scheduler.0bc5e154.js","_app/immutable/chunks/index.5f30d35d.js"];
export const stylesheets = [];
export const fonts = [];
