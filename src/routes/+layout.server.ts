export const prerender = false;

import { createClient } from '$lib/prismicio';
import type { MenuDocument } from '../prismicio-types';

export async function load({ fetch }: { fetch: typeof globalThis.fetch }) {
    let nav = null;
    let settings = null;
    let menu: MenuDocument<string>[] = [];

    let client;
    try {
        client = createClient({ fetch });
    } catch (e) {
        return { nav, menu, settings };
    }

    try {
        nav = await client.getSingle('nav');
    } catch (e) {
        nav = null;
    }

    try {
        menu = await client.getAllByType('menu');
    } catch (e) {
        menu = [];
    }

    try {
        settings = await client.getSingle('settings');
    } catch (e) {
        settings = null;
    }

    return { nav, menu, settings };
}
