import { writable } from 'svelte/store';

export let Popup = writable(false)
export const Money = writable(0);
export const Bruker = writable("")