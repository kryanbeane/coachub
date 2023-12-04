

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.33ed7177.js","_app/immutable/chunks/scheduler.0bc5e154.js","_app/immutable/chunks/index.5f30d35d.js","_app/immutable/chunks/singletons.42eeae22.js","_app/immutable/chunks/index.5a2e191c.js"];
export const stylesheets = [];
export const fonts = [];
