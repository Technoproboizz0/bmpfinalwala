import { createClient } from "@supabase/supabase-js";

// Connection details come only from .env — edit VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY there.
export const supabaseUrl = import.meta.env["VITE_SUPABASE_URL"] as string;
export const supabaseAnonKey = import.meta.env["VITE_SUPABASE_ANON_KEY"] as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export const ADMIN_EMAIL = "technoproboizz@gmail.com";
