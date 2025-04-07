export const prerender = false;
import { createClient } from '$lib/prismicio';
import "../app.css";

export async function load({ fetch, request }: { fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>, request: Request }) {
    const client = createClient({ fetch });

    let nav;

    try {
        nav = await client.getSingle('nav');
    } catch (error) {
        nav = null;
    }

    return {
        nav,
    };

}