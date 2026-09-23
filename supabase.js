import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Reemplaza TU_PROJECT_URL con la URL de tu proyecto en Supabase (está un poco más arriba en esa misma página)
const SUPABASE_URL = 'sb_publishable_gLsYSSQJSvCmuLd6ZPTf3A_iekjag78';

// Pega aquí la clave que acabas de copiar
const SUPABASE_ANON_KEY = 'sb_secret_5FJJt1ixyX0-I-lA8e5GXw_rPnk8LXE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);