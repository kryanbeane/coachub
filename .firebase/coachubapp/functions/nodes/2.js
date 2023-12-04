

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/clients/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5f4d153c.js","_app/immutable/chunks/scheduler.0bc5e154.js","_app/immutable/chunks/index.5f30d35d.js","_app/immutable/chunks/floating-ui.dom.d5b54d14.js","_app/immutable/chunks/index.5a2e191c.js"];
export const stylesheets = ["_app/immutable/assets/floating-ui.01f48f36.css"];
export const fonts = [];
