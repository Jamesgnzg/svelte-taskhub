import { createClient } from '@supabase/supabase-js';
import { PROJECT_URL, API_KEY } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

const supabase = createClient(PROJECT_URL, API_KEY);

export function load() {
	redirect(307, '/tasks');
}
