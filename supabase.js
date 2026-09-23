import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// URL sin /rest/v1/
const SUPABASE_URL = 'https://zduuszobtsusrvmicbvh.supabase.co';

// Debe ser tu Publishable Key (empieza por sb_publishable_...)
const SUPABASE_ANON_KEY = 'sb_publishable_gLsYSSQJSvCmuLd6ZPTf3A_iekjag78';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);