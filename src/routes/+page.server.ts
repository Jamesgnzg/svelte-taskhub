import { createClient } from '@supabase/supabase-js';
import { PROJECT_URL, API_KEY } from '$env/static/private';

const supabase = createClient(PROJECT_URL, API_KEY);
