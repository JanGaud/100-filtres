export const prerender = false;
import { createClient } from '$lib/prismicio';
import "../app.css";
import type { MenuDocument } from '../prismicio-types';

export async function load({ fetch, request }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, request: Request }) {
    const client = createClient({ fetch });

    let nav;
    let settings;
    let menu: MenuDocument<string>[];

    try {
        nav = await client.getSingle('nav');
    } catch (error) {
        nav = null;
    }

    try {
        menu = await client.getAllByType('menu');
    } catch (error) {
        menu = [];
    }

    try {
        settings = await client.getSingle('settings');
    } catch (error) {
        settings = null;
    }

    return {
        nav,
        menu,
        settings,
    };

}